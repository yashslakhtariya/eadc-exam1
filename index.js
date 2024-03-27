const express = require('express');

const app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const currentDate = new Date();
    const datetime = currentDate.toUTCString();

    res.send(`Current date and time: ${datetime}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});