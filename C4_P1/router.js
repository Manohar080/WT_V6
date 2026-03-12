const express = require('express');
const route = express.Router(); // Create router

// GET request
route.get('/', (req, res) => {

    res.status(200); // Success status
    res.send('Hello, World! In GET');

});

// POST request
route.post('/', (req, res) => {

    res.status(201); // Resource created
    res.send('Hello, World! In POST');

});

module.exports = route;