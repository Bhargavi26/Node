module.exports = async (req, res) => {
    console.log('Received request, delaying response...');
    await new Promise(resolve => setTimeout(resolve, 6000)); // Delay for 6 seconds
    res.json({ message: 'Response delayed for 6 seconds' });
};