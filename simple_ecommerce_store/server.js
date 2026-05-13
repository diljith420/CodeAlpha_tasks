const express = require("express");
const app = express();

app.use(express.json());

let users = [];
let orders = [];

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://picsum.photos/300?1"
  },
  {
    id: 2,
    name: "Phone",
    price: 20000,
    image: "https://picsum.photos/300?2"
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "https://picsum.photos/300?3"
  }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  users.push({ username, password });

  res.json({
    message: "Registration Successful"
  });
});

app.post("/order", (req, res) => {
  const order = req.body;

  orders.push(order);

  res.json({
    message: "Order Placed Successfully"
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});