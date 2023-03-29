const express = require('express');
const app = express();

const apiKeys = [12345, 5555]; // Array of allowed numbers

app.get('/api/:number', (req, res) => {
  const number = parseInt(req.params.number);

  // Perform your logic to determine purchaseStatus and inUse
  const purchaseStatus = apiKeys.includes(number); // Set purchaseStatus to true if number is in apiKeys
  const inUse = (number % 3 === 0); // Example logic

  res.send({ purchaseStatus, inUse });
});

app.listen(3000, () => {
  console.log('API server is listening on port 3000');
});
