const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// GET menu
app.get("/api/menu", async (req, res) => {
  const result = await pool.query("SELECT * FROM menu");
  res.json(result.rows);
});

// GET orders
app.get("/api/orders", async (req, res) => {
  const result = await pool.query("SELECT * FROM orders");
  res.json(result.rows);
});

// POST order
app.post("/api/orders", async (req, res) => {
  const { item, quantity } = req.body;

  await pool.query(
    "INSERT INTO orders (item, quantity) VALUES ($1, $2)",
    [item, quantity]
  );

  res.send("Order placed");
});

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});