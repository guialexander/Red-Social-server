const {
    getAllPublication,
    getOnePublication,
    deletePublication,
    createPublication,
    updatePublication,
  } = require('./publication.service');

  function handlerAllPublication(req, res) {
    const publication = getAllPublication();
    res.json(publication);
  }

  function handlerOnePublication(req, res) {
    const id = req.params.id;
    const publication = getOnePublication(id);

    if (!publication) {
      res.status(404).json({ message: `Publication not found with id: ${id}` });
    } else {
      res.json(publication);
    }
  }

  function handlerDeletePublication(req, res) {
    const id = req.params.id;
    const publication = deletePublication(id);

    if (!publication) {
      res.status(404).json({ message: `Publication not found with id: ${id}` });
    } else {
      res.status(204).json(publication);
    }
  }

  function handlerCreatePublication(req, res) {
    const newPublication = req.body;

    if (!newpublication.title) {
      res.status(400).json({ message: 'Publication is required' });
    }

    if (!newpublication.description) {
      res.status(400).json({ message: 'Description is required' });
    }

    const publication = createPublication(newpublication);

    return res.status(201).json(publication);
  }

  function handlerUpdatePublication(req, res) {
    const id = req.params.id;
    const { body } = req;

    const publication = updatePublication(id, body);

    if (!publication) {
      res.status(404).json({ message: `Publication not found with id: ${id}` });
    } else {
      res.json(publication);
    }
  }

  module.exports = {
    handlerAllPublication,
    handlerOnePublication,
    handlerDeletePublication,
    handlerCreatePublication,
    handlerUpdatePublication,
  };
