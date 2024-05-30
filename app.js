// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');
const session = require('express-session');


const ejs = require('ejs');
const path = require('path');


// on importe le router
const router = require('./app/router');

// un peu de config
const PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'app/views');
// servir les fichiers statiques qui sont dans "public"
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    // Secret permet de chiffre l'id du cookie de session
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
//variable globals
  next();
});

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
