const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
  const users = await User.findAll() // select * from users;
  return res.json(users)
});

const create = catchError(async (req, res) => {
  console.log(req.body); // esto es un objeto
  const { firstname, lastname, email, birthday } = req.body
  const newBody = { firstname, lastname, email, birthday }
  const user = await User.create(newBody)
  return res.status(201).json(user)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const user = await User.findByPk(id)
  if (!user) res.sendStatus(404)
  return res.json(user)
})


const destroy = catchError(async (req, res) => {
  const { id } = req.params
  const user = await User.destroy({ where: { id } })
  if (!user) res.sendStatus(404)
  return res.send('User Deleted').status(204)
})


const update = catchError(async (req, res) => {
  const { id } = req.params
  const { firstname, lastname } = req.body
  const newBody = { firstname, lastname }

  const user = await User.findByPk(id)
  if (!user) return res.sendStatus(404)


  //alternativa clasica
  const userUpdate = await User.update(
    newBody,
    { where: { id }, returning: true }
  )

  return res.json(userUpdate[1][0])


  //version avanzada

  // const userUpdate = await user.update(
  //   newBody
  // )

  // return res.send(userUpdate)



})

module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update
}

/**
 * 1- importamos el modelo
 * 2- creamos la logica del controlador
 * 3 -exportamos el controlador
 */