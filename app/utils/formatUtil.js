function formatId(id) {
    return id.toString().padStart(3, '0');
  }
  
  module.exports = {
    formatId
  };