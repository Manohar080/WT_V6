const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Import routes
const router = require('./route/bookRoute');

// Use routes
app.use('/books', router);

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});