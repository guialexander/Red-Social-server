const User = require('./user.model');
const { hashPassword } = require('../../src/auth/utils/bcrypt');
const mongoosePaginate = require('mongoose-paginate')

function getAll() {
  return User.find();
}

function getAllList(page,itemsPerPage) {
   User.paginate({},page,itemsPerPage,(error, users, total)=>{

    return {
      users,
      page,
      itemsPerPage,
      total,
      pages:false
    }


  });
}

function getById(id) {
  return User.findById(id);
}


async function create(input) {
  if (!input.password) {
    throw new Error('Password is required');
  }
  const hashedPassword = await hashPassword(input.password);
  const expiresIn = Date.now() + 3_600_000 * 24; // 24 hours

  const user = {
      name: input.name,
      lastName: input.lastName,
      nick:  input.nick,
      email: input.email,
      role: input.role,
      avatar: input.avatar,
      password: hashedPassword,
      passwordResetExpires: new Date(expiresIn), // 24 hours


    }


  return User.create(user);
}

function update(id, data) {
  return User.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

function remove(id) {
  return User.findByIdAndDelete(id);
}

async function getUserByEmail(email) {
  const user = await User.findOne({email:email})
  //.select({'password':0}) colocamos el cero para quitar el campo que no queremos

  return user;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getUserByEmail,
  getAllList
};
