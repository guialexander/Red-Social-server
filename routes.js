/**
 * Main application routes
 */
const task = require('./api/task');
const user = require('./api/user');
const publication = require('./api/publication');
const follow= require('./api/follow');
const authLocalRouter = require('./src/auth/local');




function routes(app) {
  // API Routes
  app.use('/api/tasks', task);
  app.use('/api/users', user);
  app.use('/api/follows', follow);
  app.use('/api/publications', publication);


    //Auth
  app.use('/auth/local',authLocalRouter);

}

module.exports = routes;
