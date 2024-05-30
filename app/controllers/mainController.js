const api = require('../dataMapper/api');

const mainController = {
    // méthode pour la page d'accueil
   async homePage(req, res) {
    try {
        const data = await api.getAllArrondissements();

        res.render('index',{
            data,
        } );
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur lors de la récupération des arrondissements");
      }
    },

    async filterView(req, res) {
        const arrondissement = req.query.zipcode;
        try {
            const data = await api.getAllByArrondissement(arrondissement);
            res.render('filterView',{
                arrondissement,
                data,
            } );
        } catch (error) {
            console.error(error);
            res.status(500).send("Erreur lors de la récupération des sanisettes par arrondissement");
          }
        },

};

module.exports = mainController;