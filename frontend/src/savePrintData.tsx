
// Define TypeScript interface for order structure
interface OrderData {
  storeName: string;
  storeAddress: string;
  date: string;
  orderNumber: string;
  itemDetails: {
    itemName: string;
    customizations: { label: string; value: string }[];
  };
  barcode: { src: string; alt: string };
  price: number;
  footer: string;
}

// Function to convert HTML string to JSON
const convertHTMLToJSON = (htmlString: string): OrderData | null => {
  try {
    // Create a virtual DOM from the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    // Extract required fields
    const orderData: OrderData = {
      storeName: doc.querySelector(".store-name")?.textContent?.trim() || "",
      storeAddress: doc.querySelectorAll(".store-address")[0]?.textContent?.trim() || "",
      date: doc.querySelectorAll(".store-address")[1]?.textContent?.trim() || "",
      orderNumber: doc.querySelector(".order-number")?.textContent?.replace("Order #", "").trim() || "",
      itemDetails: {
        itemName: doc.querySelector(".item-name")?.textContent?.trim() || "",
        customizations: Array.from(doc.querySelectorAll(".customization")).map(custom => ({
          label: custom.querySelector(".label")?.textContent?.replace(":", "").trim() || "",
          value: ""
        }))
      },
      barcode: {
        src: doc.querySelector(".barcode img")?.getAttribute("src") || "",
        alt: doc.querySelector(".barcode img")?.getAttribute("alt") || ""
      },
      price: parseFloat(doc.querySelector(".price")?.textContent?.replace("Total: $", "").trim() || "0"),
      footer: doc.querySelector(".footer")?.textContent?.trim() || ""
    };

    return orderData;
  } catch (error) {
    console.error("Error parsing HTML:", error);
    return null;
  }
};
 
 const savePrintData = async (data: any): Promise<void> => {
  const value = convertHTMLToJSON(data)
    try {
      const response = await fetch("http://localhost:3001/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body:  JSON.stringify(value),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log(result.message);
    } catch (err) {
      console.error("Error saving data:", err instanceof Error ? err.message : err);
    }
  };

  export default savePrintData;
  