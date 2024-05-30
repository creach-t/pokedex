const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');


const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);
router.get('/filter/arrondissement', mainController.filterView);

// on exporte le router 
module.exports = router;
