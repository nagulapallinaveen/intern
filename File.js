const express = require('express');
const app = express();

// Middleware for parsing request body as JSON
app.use(express.json());

// In-memory store for medical bills
let medicalBills = [];

// GET /items endpoint to retrieve all medical bills
app.get('/items', (req, res) => {
  res.json(medicalBills);
});

// POST /items endpoint to create a new medical bill
app.post('/items', (req, res) => {
  const { patientName, patientAddress, hospitalName, dateOfService, billAmount } = req.body;

  // Generate a unique ID for the new medical bill
  const id = medicalBills.length + 1;

  // Create a new medical bill object
  const newMedicalBill = { id, patientName, patientAddress, hospitalName, dateOfService, billAmount };

  // Add the new medical bill to the in-memory store
  medicalBills.push(newMedicalBill);

  // Send the new medical bill object in the response
  res.json(newMedicalBill);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});