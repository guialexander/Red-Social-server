/**
 * Main application routes
 */
const task = require('./api/task');
const user = require('./api/user');
const publication = require('./api/publication');
const follow= require('./api/follow');
const authLocalRouter = require('./src/auth/local');
const uploadRouter = require('./api/upload');




function routes(app) {
  // API Routes
  app.use('/api/tasks', task);
  app.use('/api/users', user);
  app.use('/api/follows', follow);
  app.use('/api/publications', publication);


  //upload Image

  //  post http://localhost:8080/api/upload/files
  app.use('/api/upload', uploadRouter);


    //Auth
  app.use('/auth/local',authLocalRouter);

}

module.exports = routes;
