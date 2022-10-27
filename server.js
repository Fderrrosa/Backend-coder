const express = require('express');
const fs = require('fs');
const Contenedor = require('./contenedor');

const app = express();
const PORT = process.env.PORT || 8080;
const contenedor = new Contenedor('productos.txt');


const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.get('/productos', async (req, res) => {
    const products = await contenedor.getAll();
    res.json(products);
});


app.get('/productoRandom', async (req, res) => {
    const products = await contenedor.getAll();
    res.json(products[Math.floor(Math.random() * products.length)]);
});

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    var html = fs.readFileSync('./index.html');
    res.write(html);
    res.end();
});
