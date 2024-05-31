function notFoundMiddleware(req, res) {
    res
      .status(404)
      .render('notFound');
  }
  
  module.exports = notFoundMiddleware;