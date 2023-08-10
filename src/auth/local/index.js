const { Router } = require('express');

const router = Router();

const {
    loginHandler,
  } = require('./local.controller');

  // login -> POST -> /auth/local/login http://localhost:8080/auth/local/login
router.post('/login', loginHandler);

module.exports = router;
