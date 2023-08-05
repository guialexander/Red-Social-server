/**
 * Main application routes
 */
const task = require('./api/task');
const user = require('./api/user');
const publication = require('./api/publication');
const follow= require('./api/follow');



function routes(app) {
  // API Routes
  app.use('/api/tasks', task);
  app.use('/api/users', user);
  app.use('/api/follows', follow);
  app.use('/api/publications', publication);

}

module.exports = routes;
