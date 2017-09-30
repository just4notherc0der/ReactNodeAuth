module.exports = function(app) {
  // index route
  app.get('/', (req, res, next) => {
    res.send('assasasa');
  });
}
