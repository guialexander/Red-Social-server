const Publication = require('./publication.mode');

function getAllPublication() {
  return Publication.find();
}

async function getOnePublication(id) {
  const publication = await Publication.findById(id);

  if (!publication) {
    return null;
  }

  return publication;
}

async function deletePublication(id) {
  const publication = await Publication.findByIdAndDelete(id);

  if (!publication) {
    return null;
  }

  return publication;
}

function createPublication(publication) {
  return Publication.create(publication);
}

function updatePublication(id, publication) {
  return Publication.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

module.exports = {
  getAllPublication,
  getOnePublication,
  deletePublication,
  createPublication,
  updatePublication,
};
