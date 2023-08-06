const User = require('./user.model');
const { hashPassword } = require('../../src/auth/utils/bcrypt');

function getAll() {
  return User.find();
}

function getById(id) {
  return User.findById(id);
}

async function create(input) {
  if (!input.password) {
    throw new Error('Password is required');
  }
  const hashedPassword = await hashPassword(input.password);
  //const expiresIn = Date.now() + 3_600_000 * 24; // 24 hours
  const user = {
      name: input.name,
      lastName: input.lastName,
      nick:  input.nick,
      email: input.email,
      role: input.role,
      avatar: input.avatar,
      password: hashedPassword


    }


  return User.create(user);
}

function update(id, data) {
  return User.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

function remove(id) {
  return User.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
