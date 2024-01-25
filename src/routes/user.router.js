const { getAll } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/") //        /users
  .get(getAll)

module.exports = userRouter;