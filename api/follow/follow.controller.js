const {
    getAllFollow,
    getOneFollow,
    deleteFollow,
    createFollow,
    updateFollow,
  } = require('./follow.service');

  function handlerAllFollow(req, res) {
    const follow = getAllFollow();
    res.json(follow);
  }

  function handlerOneFollow(req, res) {
    const id = req.params.id;
    const follow = getOneFollow(id);

    if (!follow) {
      res.status(404).json({ message: `Follow not found with id: ${id}` });
    } else {
      res.json(follow);
    }
  }

  function handlerDeleteFollow(req, res) {
    const id = req.params.id;
    const follow = deleteFollow(id);

    if (!follow) {
      res.status(404).json({ message: `Follow not found with id: ${id}` });
    } else {
      res.status(204).json(follow);
    }
  }

  function handlerCreateFollow(req, res) {
    const newFollow = req.body;

    if (!newFollow.title) {
      res.status(400).json({ message: 'Title is required' });
    }

    if (!newFollow.description) {
      res.status(400).json({ message: 'Description is required' });
    }

    const follow = createTask(newFollow);

    return res.status(201).json(follow);
  }

  function handlerUpdateFollow(req, res) {
    const id = req.params.id;
    const { body } = req;

    const follow = updateFollow(id, body);

    if (!follow) {
      res.status(404).json({ message: `Follow not found with id: ${id}` });
    } else {
      res.json(follow);
    }
  }

  module.exports = {
    handlerAllFollow,
    handlerOneFollow,
    handlerDeleteFollow,
    handlerCreateFollow,
    handlerUpdateFollow,
  };
