const { getAll } = require('../controllers/car.controllers');
const express = require('express');

const carRouter = express.Router();

carRouter.route("/") // ----> /cars
  .get(getAll)

module.exports = carRouter;