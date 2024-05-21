const { Router } = require('express')
const mainController = require('./controllers/mainController')

const router = Router();


router.get('/', mainController.homePage);

router.get('/search', mainController.searchPage);

router.get('/:id', mainController.detailsPage)

module.exports = router