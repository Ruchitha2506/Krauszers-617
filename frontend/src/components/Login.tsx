import React, { useState } from "react";
import OrdersTable from "./OrdersTable";

interface Order {
  date: string;
  orderNumber: string;
  itemName: string;
  price: string;
}

interface LoginProps {
  handleLog: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ handleLog }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Function to handle login
  const handleLogin = async () => {
    setError(null);
    setOrders([]);

    try {
      const response = await fetch("http://localhost:3001/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed: ${response.statusText}');
      }

      const data = await response.json();
      setOrders(data.data); // Extract orders from response
      setIsLoggedIn(true);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!isLoggedIn ? (
        <>
          <button onClick={() => handleLog(false)} style={{ marginBottom: "10px" }}>
            Close
          </button>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "250px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "250px" }}
          />
          <br />
          <button
            onClick={handleLogin}
            style={{
              padding: "10px 20px",



              cursor: "pointer",
              background: "#007BFF",
              color: "#fff",
              border: "none",
            }}
          >
            Login
          </button>

          {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
        </>
      ) : (
        <OrdersTable orders={orders} />
      )}
    </div>
  );
};

export default Login;