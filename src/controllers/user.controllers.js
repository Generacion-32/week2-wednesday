const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
  const users = await User.findAll() // select * from users;

  return res.json(users)
});

module.exports = {
  getAll
}

/**
 * 1- importamos el modelo
 * 2- creamos la logica del controlador
 * 3 -exportamos el controlador
 */