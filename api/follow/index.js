const { Router } = require('express');

const {
  handlerAllFollow,
  handlerOneFollow,
  handlerDeleteFollow,
  handlerCreateFollow,
  handlerUpdateFollow,
} = require('./follow.controller')

const router = Router();

router.get('/', handlerAllFollow)
router.get('/:id', handlerOneFollow)
router.delete('/:id', handlerDeleteFollow)
router.post('/', handlerCreateFollow)
router.patch('/:id', handlerUpdateFollow)

module.exports = router;
