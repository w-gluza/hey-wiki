// Import dependencies
const express = require("express");
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/build')));


// Allow parsing on request bodies
app.use(express.json());

// Import routes for API
const watsonRoutes = require("./routes/api/watson");

// Direct requests to /api/watson/ to Watson Routes
app.use("/api/watson", watsonRoutes);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port  http://localhost:${port}`);
  console.log("Hey Wiki!");
});
