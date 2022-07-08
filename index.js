import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 9080;

app.use(express.static('public'));

app.get('/generic', (req, res) => {
    res.sendFile(`${ __dirname }/public/generic.html`);
});

app.get('/elements', (req, res) => {
    res.sendFile(`${ __dirname }/public/elements.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${ __dirname }/public/404.html`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

