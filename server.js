const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    return res.send('Root endpoint');
})
app.get('/test', (req, res) => {
    return res.send('Test endpoint');
});


app.listen(PORT, () => {
    console.log(`Server is running o port ${PORT}`);
});