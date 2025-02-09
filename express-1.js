const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "./public")));

// 404 Route for undefined routes
app.get('*', (req, res) => {
    res.status(404).send("Resource not found");
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running at port 5000");
});
