const { Router } = require('express');

const {
  getAllHandler,
  getByIdHandler,
  createHandler,
  updateHandler,
  removeHandler,
  profileHandler,
  listHandler
} = require('./user.controller');

const {isAuthenticated} = require('../../src/auth/auth.controller')

const router = Router();

router.get('/', isAuthenticated,getAllHandler);
router.get('/:id', getByIdHandler);
router.post('/', createHandler);
router.patch('/:id', updateHandler);
router.delete('/:id', removeHandler);
router.get('/profile/:id', profileHandler);
router.get('/list/:page?', listHandler);

module.exports = router;
