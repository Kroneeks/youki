const express = require('express');
const YouTube = require('youtube-sr').default;
const cors = require('cors');

const app = express();
const port = 8000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to server!');
});

const mapCategoriesToId = {
    education: '27',
    entertainment: '24',
    news_and_politics: '25',
    people_and_blogs: '22',
    science_and_technology: '28',
};

app.get('/youtube/:category/:key', async (req, res) => {
    const key = req.params.key;
    const category = req.params.category;
    const categoryId = mapCategoriesToId[category];
    const apiKey = 'AIzaSyDiPwahhSHTAo0W_pl9o6mxIJS3qLhv6bc';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&type=video&q=${key}&relevanceLanguage=en&videoCaption=closedCaption&videoCategoryId=${categoryId}&maxResults=5&regionCode=US&key=${apiKey}`;
    let fulldata;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            fulldata = data.items;

            res.send(JSON.stringify(fulldata));
        });

    // YouTube.search(`key&categoryId=GCQmVhdXR5ICYgRmFzaGlvbg`, {
    // limit: 3,
    // safeSearch: true,
    // })
    // .then((x) => {
    // res.send(JSON.stringify(x));
    // })
    // .catch(() => {
    // res.send({ data: 'error' });
    // });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
