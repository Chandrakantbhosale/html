const express = require('express');
const app = express();

// Middleware to parse JSON bodies (optional for headers)
app.use(express.json());

// Route to handle config from headers
app.get('/config', (req, res) => {
    // Access custom header (case-insensitive)
    const configHeader = req.headers['x-config'];

    if (!configHeader) {
        return res.status(400).json({ error: 'Missing X-Config header' });
    }

    let configObject;
    try {
        configObject = JSON.parse(configHeader);  // Parse JSON string from header
    } catch (err) {
        return res.status(400).json({ error: 'Invalid JSON in X-Config header' });
    }

    // Return the same config object
    res.json(configObject);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
