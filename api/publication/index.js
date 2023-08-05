const { Router } = require('express');

const {
  handlerAllPublication,
  handlerOnePublication,
  handlerDeletePublication,
  handlerCreatePublication,
  handlerUpdatePublication,
} = require('./publication.controller')

const router = Router();

router.get('/', handlerAllPublication)
router.get('/:id', handlerOnePublication)
router.delete('/:id', handlerDeletePublication)
router.post('/', handlerCreatePublication)
router.patch('/:id', handlerUpdatePublication)

module.exports = router;
