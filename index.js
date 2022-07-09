import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
import hbs from 'hbs';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render(`home`, {
        nombre: 'Jose Belmar',
        titulo: 'Analista Programador'
    });
});

app.get('/generic', (req, res) => {
    res.render(`generic`, {
        nombre: 'Jose Belmar',
        titulo: 'Analista Programador'
    });
});

app.get('/elements', (req, res) => {
    res.render(`elements`, {
        nombre: 'Jose Belmar',
        titulo: 'Analista Programador'
    });
});

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

