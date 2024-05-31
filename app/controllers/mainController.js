const pokedex = require('../../public/data/pokedex.json');

const mainController = {
  homePage(req, res) {

    res.render('index', { pokedex: req.pokedex });
  },

  searchPage(req, res) {
    const searchedText = req.query.searchedText ? req.query.searchedText.toLowerCase() : '';

    const pokemonsFound = req.pokedex.filter(pokemon => {
      if (!searchedText) {
        return true;
      }

      return pokemon.name.fr.toLowerCase().includes(searchedText) ||
             pokemon.name.en.toLowerCase().includes(searchedText);
    });

    res.render('search', {
      searchedText,
      pokemonsFound
    });
  },

  detailsPage(req,res) {
    const pokemonId = parseInt(req.params.id);
 
    const pokemonFound = pokedex.find(pokemon => {
      return pokemon.pokedex_id === pokemonId;
    })
  
    res.render('details',{
      pokemonId,
      pokemonFound
    })
  }

};

module.exports = mainController;
