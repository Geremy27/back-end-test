const userController = require('./controllers/user');
const genderController = require('./controllers/gender');
const DB = require('./config/database');

module.exports = (app) => {
  // Makes sure database connection is working fine and server is up.
  app.get('/api/health-check', async (req, res) => {
    try {
      await DB.authenticate();

      res.send('OK');
    } catch (error) {
      res.send(error);
    }
  });

  // Gender routes.
  app.get('/api/genders', genderController.list);

  // User routes.
  app.get('/api/users', userController.list);
  app.get('/api/users/:id', userController.find);
  app.post('/api/users', userController.create);
  app.put('/api/users', userController.update);
  app.delete('/api/users/:id', userController.delete);
};
