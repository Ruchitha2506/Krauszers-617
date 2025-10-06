import JsBarcode from 'jsbarcode';
import savePrintData from '../savePrintData.tsx';

export function printOrder(orderNumber: string, items: any[], total: number) {
  items.forEach((item, index) => {
    const printContent = formatSingleItemReceipt(orderNumber, item, index + 1);
    printReceipt(printContent);
  });

  return true;
}

function generateBarcodeDataUrl(data: string): string {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  try {
    JsBarcode(svg, data, {
      format: "CODE128",
      width: 2,
      height: 40,
      displayValue: true, // Set to false if you don't want text below the barcode
      fontSize: 14,
      margin: 10,
      background: '#ffffff'
    });

    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    return URL.createObjectURL(svgBlob);
  } catch (error) {
    console.error('Barcode generation failed:', error);
    return '';
  }
}

function generateBarcodeData(item: any, date: string): string {
  // Only return the sandwich ID as a 5-digit string
  const sandwichId = item?.id;
  return String(sandwichId ?? '00000').padStart(5, '0');
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

  // Handle customization text
  const details = item.details?.split('|').map((line: string) => line.trim()) || [];
  for (const line of details) {
    if (line) {
      customizations.push(`<div class="customization">${line}</div>`);
    }
  }

  const price = typeof item.price === 'number'
    ? item.price
    : item.price?.regular ?? 0;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
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
        <div class="item-name">${item.quantity}x ${item.name}</div>
        ${customizations.join('')}
      </div>

      <div class="barcode">
        <img src="${barcodeUrl}" alt="Barcode for ${barcodeData}" />
      </div>

      <div class="price">
        Total: $${(price * (item.quantity || 1)).toFixed(2)}
      </div>

      <div class="footer">
        Thank you for your order!
      </div>
    </body>
    </html>
  `;
}

export function printReceipt(content: string) {
  try {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) throw new Error('Could not access iframe document');

    doc.open();
    doc.write(content);
    doc.close();

    setTimeout(() => {
      const printWindow = iframe.contentWindow;
      if (!printWindow) throw new Error('Could not access print window');
      printWindow.focus();
      printWindow.print();
      savePrintData(content);
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }, 1000);
  } catch (error) {
    console.error('Printing failed:', error);
  }
}
