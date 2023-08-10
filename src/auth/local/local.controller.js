//const { Request, Response, NextFunction } = require('express');
const {
    getUserByEmail
} = require('../../../api/user/user.service');

const {comparePassword}= require('../utils/bcrypt');

const {signToken} = require('../auth.service');
const moment = require('moment/moment');



async function loginHandler(req, res) {
    const { email, password } = req.body;

    try {
      const user = await getUserByEmail(email);
      console.log(user)

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // compare password
      const isMatch = await comparePassword(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Email or password not match' });
      }


      // jwt devolver el token


      const payload = {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        nick: user.nick,
        email: user.email,
        roel: user.role,
        image: user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        passwordResetExpires: user.passwordResetExpires

      };

      const token = signToken(payload);

      const profile = {
        id: user._id,
        name: user.name,
        nick: user.nick,
      };


      return res.status(200).send({
        status: 'success',
        message: 'Login ok',
        profile,
        token
      })
    } catch (error) {
      console.log(error)
    }
  }

  module.exports = {
    loginHandler

  };
