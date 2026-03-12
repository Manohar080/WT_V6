const express = require('express'); // Import Express
const app = express(); // Create Express app

const router = require('./router'); // Import router

// Use router for all routes starting with /api
app.use('/api', router);

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});