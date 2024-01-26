const { getAll, create, getOne, destroy, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

//rutas estaticas
userRouter.route("/") //        /users
  .get(getAll)
  .post(create)

//rutas dinamicas:
userRouter.route("/:id") // /users/1
  .get(getOne)
  .delete(destroy)
  .put(update)

module.exports = userRouter;