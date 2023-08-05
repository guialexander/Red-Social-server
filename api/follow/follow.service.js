const Follow = require('./follow.mode');

function getAllFollow() {
  return Follow.find();
}

async function getOneFollow(id) {
  const follow = await Follow.findById(id);

  if (!follow) {
    return null;
  }

  return follow;
}

async function deleteFollow(id) {
  const follow = await Follow.findByIdAndDelete(id);

  if (!follow) {
    return null;
  }

  return follow;
}

function createFollow(follow) {
  return Follow.create(follow);
}

function updateFollow(id, follow) {
  return Follow.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

module.exports = {
  getAllFollow,
  getOneFollow,
  deleteFollow,
  createFollow,
  updateFollow,
};
