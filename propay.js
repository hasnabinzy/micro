const express = require('express');
const app = express();
const PORT = 1000;

app.get('/product', (req, res) => {
  res.json({
    productId: "A123",
    name: "Laptop",
    price: 1500,
    currency: "USD",
    description: "High-performance laptop"
  });
});

app.get('/payment', (req, res) => {
  res.json({
    paymentId: "12345",
    status: "Success",
    amount: 1000,
    currency: "USD",
    paymentMethod: "Credit Card"
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Combined service running at http://0.0.0.0:${PORT}`);
});

