const express = require('express');
const router = require('./app/router.js');
const pokedex = require('./public/data/pokedex.json')
const formatPokedex = require('./app/middlewares/formatPokedex');
const notFoundMiddleware = require('./app/middlewares/notFound');
const app = express();


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.pokedex = pokedex;
    next();
  });

app.use(formatPokedex);

app.use(router);

app.use(notFoundMiddleware)

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001')
  })