const axios = require('axios');

const api = {


    async getAllByArrondissement(arrondissement) {
            const results = await axios.get('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/sanisettesparis/records', {
                params: {
                    select: '*',
                    where: `arrondissement = ${arrondissement}`,
                    limit: '100'
                }
            });

            const data = results.data.results; // Les résultats de l'API
            return data;
    },

    async getAllArrondissements() {
        const results = await axios.get('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/sanisettesparis/records', {
            params: {
                select: 'arrondissement',
                group_by: 'arrondissement',
                limit: '100'
            }
        });

        const data = results.data.results; // Les résultats de l'API

        return data;
}


};
module.exports = api;