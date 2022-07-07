import express from 'express';
const app = express();
const port = 9080;

console.log(__dirname);

app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo');
});

app.get('*', (req, res) => {
    res.sendFile(`/public/404.html`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

