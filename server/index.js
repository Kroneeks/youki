const express = require('express');
const YouTube = require('youtube-sr').default;
const cors = require('cors');

const app = express();
const port = 8000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to server!');
});

app.get('/youtube/:key', (req, res) => {
    const key = req.params.key;
    const videos = {};

    YouTube.search(key, { limit: 3, safeSearch: true })
        .then((x) => {
            res.send(JSON.stringify(x));
        })
        .catch(() => {
            res.send({ data: 'error' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
