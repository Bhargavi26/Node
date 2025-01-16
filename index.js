const express = require('express');
const app = express();
const PORT = 3000;

// API endpoint with a delay of 6 seconds
app.get('/slow-api', async (req, res) => {
    console.log('Received request, delaying response...');
    setTimeout(() => {
        res.json({ message: 'Response delayed for 6 seconds' });
    }, 6000); // 6000ms delay
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
