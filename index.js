const express = require('express');

const app = express();

const port = process.env.PORT || 4200;

app.get('/', (reqest, response) => {
    response.send({
        timestamp: Date.now()
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
