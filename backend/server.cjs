const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());

// ✅ 1. Enable CORS for frontend requests
app.use(cors({ origin: "http://localhost:5173", methods: "POST", allowedHeaders: "Content-Type" }));

// ✅ 2. Define file path for JSON storage
const filePath = path.join(__dirname, "output.json");

// ✅ 3. Function to read JSON file
const readDataFromFile = () => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([])); // Create file with an empty array if it doesn't exist
    }
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("❌ ERROR reading file:", err);
    return [];
  }
};

// ✅ 4. Function to save data to JSON file
const saveDataToFile = (newData) => {
  try {
    let existingData = readDataFromFile();
    if (!Array.isArray(existingData)) {
      existingData = []; // Ensure it's an array
    }
    existingData.push(newData); // Append new entry
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2)); // Save to file with formatting
  } catch (err) {
    console.error("❌ ERROR writing file:", err);
  }
};

// ✅ 5. API Endpoint - Save data in `output.json`
app.post("/save", (req, res) => {
  console.log("✅ Parsed JSON body:", req.body);

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Invalid request: No data provided." });
  }

  saveDataToFile(req.body);
  res.json({ message: "Data saved successfully." });
});

// ✅ 6. Login API - Read data from `output.json`
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin123";

app.post("/data", (req, res) => {
  const { username, password } = req.body;
  const jsonData = readDataFromFile();
  const orders =jsonData.map(order => ({
    date: order.date,
    orderNumber: order.orderNumber,
    itemName: order.itemDetails.itemName,
    price: order.price.toFixed(2)
  }));

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    res.json({ message: "Login success", data: orders });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// ✅ 7. Start backend server
app.listen(3001, () => console.log("🚀 Server running on port 3001 (JSON Mode)"));
