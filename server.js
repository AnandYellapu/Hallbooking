const express = require('express');
const app = express();
const port = 8000;

// Middleware to parse request body as JSON
app.use(express.json());

// Routes
const routes = require('./routes/routes');
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
