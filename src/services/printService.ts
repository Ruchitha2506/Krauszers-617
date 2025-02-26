import JsBarcode from 'jsbarcode';
import savePrintData from '../savePrintData.tsx';

// Simple print service that formats and prints order details
export function printOrder(orderNumber: string, items: any[], total: number) {
  // Print individual receipts for each item
  items.forEach((item, index) => {
    const printContent = formatSingleItemReceipt(orderNumber, item, index + 1);
    
    printReceipt(printContent);
  });
 
  return true;
}

function generateBarcodeDataUrl(data: string): string {
  // Create a new SVG element for barcode generation
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  try {
    JsBarcode(svg, data, {
      format: "CODE128",
      width: 2,
      height: 100,
      displayValue: true,
      fontSize: 14,
      margin: 10,
      background: '#ffffff'
    });

    // Convert SVG to data URL
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    return URL.createObjectURL(svgBlob);
  } catch (error) {
    console.error('Barcode generation failed:', error);
    return '';
  }
}

function generateBarcodeData(item: any, date: string): string {
  const itemId = String(item.id).padStart(5, '0');
 

  return `${itemId}`;
}

function formatSingleItemReceipt(orderNumber: string, item: any, itemNumber: number): string {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const barcodeData = generateBarcodeData(item, date);
  const barcodeUrl = generateBarcodeDataUrl(barcodeData);

  const customizations = [];
  if (item.customizations) {
    if (item.customizations.bread) customizations.push(`<div class="customization"><span class="label">Bread:</span> ${item.customizations.bread}</div>`);
    if (item.customizations.veggies?.length) customizations.push(`<div class="customization"><span class="label">Veggies:</span> ${item.customizations.veggies.join(', ')}</div>`);
    if (item.customizations.cheese) customizations.push(`<div class="customization"><span class="label">Cheese:</span> ${item.customizations.cheese}</div>`);
    if (item.customizations.extraCheese) {
      customizations.push(`<div class="customization"><span class="label">Extra Cheese:</span> ${item.customizations.extraCheese.type} (${item.customizations.extraCheese.slices} ${item.customizations.extraCheese.slices === 1 ? 'slice' : 'slices'})</div>`);
    }
    if (item.customizations.dressings?.length) customizations.push(`<div class="customization"><span class="label">Dressings:</span> ${item.customizations.dressings.join(', ')}</div>`);
    if (item.customizations.temperature) customizations.push(`<div class="customization"><span class="label">Temperature:</span> ${item.customizations.temperature}</div>`);
    if (item.customizations.weight) customizations.push(`<div class="customization"><span class="label">Weight:</span> ${item.customizations.weight === 'pound' ? '1 lb' : '1/2 lb'}</div>`);
    if (item.customizations.specialInstructions) customizations.push(`<div class="note">${item.customizations.specialInstructions}</div>`);
  }

  const price = item.customizations?.totalPrice ||
    (item.price.byWeight
      ? (item.customizations?.weight === 'pound'
        ? item.price.pound
        : item.price.halfPound)
      : item.price.regular);



  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Order #${orderNumber}-${itemNumber}</title>
      <style>
        @page {
          margin: 0;
          size: 80mm 200mm;
        }
        body {
          font-family: 'Courier New', monospace;
          padding: 10mm;
          margin: 0;
          width: 80mm;
          font-size: 18pt;
        }
        .header {
          text-align: center;
          margin-bottom: 5mm;
        }
        .store-name {
          font-size: 20pt;
          font-weight: bold;
        }
        .store-address {
          font-size: 16pt;
        }
        .order-number {
          font-size: 16pt;
          font-weight: bold;
          margin: 3mm 0;
        }
        .item-details {
          margin: 5mm 0;
        }
        .item-name {
          font-weight: bold;
          font-size: 18pt;
          margin-bottom: 2mm;
        }
        .customization {
          font-size: 18pt;
          margin-left: 3mm;
          margin-bottom: 1mm;
        }
        .label {
          font-weight: bold;
        }
        .note {
          font-size: 18pt;
          margin-left: 3mm;
          margin-top: 2mm;
          font-style: italic;
        }
        .barcode {
          text-align: center;
          margin: 5mm 0;
        }
        .barcode img {
          width: 100%;
          height: auto;
        }
        .price {
          font-size: 18pt;
          font-weight: bold;
          text-align: right;
          margin-top: 3mm;
          border-top: 1px dashed #000;
          padding-top: 2mm;
        }
        .footer {
          margin-top: 5mm;
          text-align: center;
          font-size: 10pt;
          border-top: 1px dashed #000;
          padding-top: 2mm;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="store-name">KRAUSZERS - 617</div>
        <div class="store-address">377 Campbell Avenue</div>
        <div class="store-address">${date}</div>
        <div class="order-number">Order #${orderNumber}-${itemNumber}</div>
      </div>

      <div class="item-details">
        <div class="item-name">${item.name}</div>
        ${customizations.join('')}
      </div>

      <div class="barcode">
        <img src="${barcodeUrl}" alt="Barcode for ${barcodeData}" />
      </div>

      <div class="price">
        Total: $${price.toFixed(2)}
      </div>

      <div class="footer">
        Thank you for your order!
      </div>
    </body>
    </html>
  `;
}

function printReceipt(content: string) {
  try {
    // Create a hidden iframe for printing
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Write the content to the iframe
    const doc = iframe.contentWindow?.document;
    if (!doc) throw new Error('Could not access iframe document');

    doc.open();
    doc.write(content);
    doc.close();

    // Wait for images to load before printing
    setTimeout(() => {
      const printWindow = iframe.contentWindow;
      if (!printWindow) throw new Error('Could not access print window');

      // Directly call the print method
      printWindow.print();
      savePrintData(content);
      // Remove the iframe after printing
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }, 500); // Wait 500ms for images to load

  } catch (error) {
    console.error('Printing failed:', error);
  }
}
