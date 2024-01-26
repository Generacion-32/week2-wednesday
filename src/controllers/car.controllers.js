const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async (req, res) => {
  const cars = await Car.findAll()
  return res.json(cars)
});

const create = catchError(async (req, res) => {
  const { brand, model, year, color } = req.body
  const newBody = { brand, model, year, color }
  const car = await Car.create(newBody)
  return res.status(201).json(car)
})


const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const car = await Car.findByPk(id)
  if (!car) return res.sendStatus(404)
  return res.json(car)
})


const destroy = catchError(async (req, res) => {
  const { id } = req.params
  const car = await Car.destroy({ where: { id } })
  if (!car) res.sendStatus(404)
  return res.send("Car Deleted").status(204)
})


const update = catchError(async (req, res) => {
  const { id } = req.params
  const { brand, model, year, color } = req.body
  const newBody = { brand, model, year, color }

  const car = await Car.findByPk(id)
  if (!car) return res.sendStatus(404)

  const carUpdate = await Car.update(
    newBody,
    { where: { id }, returning: true }
  )

  return res.json(carUpdate[1][0])
})

module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update
}