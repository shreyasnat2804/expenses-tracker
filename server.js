const express = require('express');
const app = express();

// Serve static files (HTML, CSS, JS) from the "public" directory
app.use(express.static('public'));

// Parse JSON-encoded bodies
app.use(express.json());

// Store expenses in an array
let expenses = [];

// Endpoint to receive expense data
app.post('/expenses', (req, res) => {
  const expense = req.body;
  expenses.push(expense);
  console.log('Received new expense:', expense);
  res.sendStatus(200);
});

// Endpoint to get expenses data
app.get('/expenses', (req, res) => {
  res.json(expenses);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
