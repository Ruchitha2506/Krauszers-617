import React from "react";

interface Order {
  date: string;
  orderNumber: string;
  itemName: string;
  price: string;
}

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Order List</h2>
      <table style={{ width: "80%", margin: "auto", borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", borderBottom: "1px solid black" }}>
            <th style={{ padding: "10px", border: "1px solid black" }}>Date</th>
            <th style={{ padding: "10px", border: "1px solid black" }}>Order Number</th>
            <th style={{ padding: "10px", border: "1px solid black" }}>Item Name</th>
            <th style={{ padding: "10px", border: "1px solid black" }}>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index} style={{ borderBottom: "1px solid black" }}>
                <td style={{ padding: "10px", border: "1px solid black" }}>{order.date}</td>
                <td style={{ padding: "10px", border: "1px solid black" }}>{order.orderNumber}</td>
                <td style={{ padding: "10px", border: "1px solid black" }}>{order.itemName}</td>
                <td style={{ padding: "10px", border: "1px solid black" }}>{order.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ padding: "10px", textAlign: "center" }}>
                No orders available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;