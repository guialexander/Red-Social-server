const {
  create,
  getAll,
  getById,
  remove,
  update,
} = require('./user.service')


async function getAllHandler(req, res, next) {
  try {
    const users = await getAll();
    return res.json(users);
  } catch (error) {
    return next(error);
  }
}

async function getByIdHandler(req, res, next) {
  try {
    const { id } = req.params;
    const user = await getById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user.profile);
  } catch (error) {
    return next(error);
  }
}

async function createHandler(req, res, next) {
  try {
    let params =req.body;
    if(!params.name || !params.email || !params.password || !params.nick){
        return res.status(400).json({
          status: 'Error',
          message:'missing data',
          params
        })

      }
      console.log("create")
      const user = await create(params);
      return res.status(201).json({
        status: 'Succes',
        message: 'user registration action',
        user
      });

  } catch (error) {
    return next(error);
  }
}

async function updateHandler(req, res, next) {
  try {
    const { id } = req.params;
    console.log("🚀 ~ file: user.controller.js:46 ~ updateHandler ~ id:", id)
    const user = await update(id, req.body);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

async function removeHandler(req, res, next) {
  try {
    const { id } = req.params;
    const user = await remove(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllHandler,
  getByIdHandler,
  createHandler,
  updateHandler,
  removeHandler,
}
