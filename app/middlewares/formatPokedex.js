const { formatId } = require('../utils/formatUtil');

function formatPokedex(req, res, next) {
  if (req.pokedex) {
    req.pokedex = req.pokedex.map(pokemon => ({
      ...pokemon,
      pokedex_id: formatId(pokemon.pokedex_id)
    }));
  }
  next();
}

module.exports = formatPokedex;
