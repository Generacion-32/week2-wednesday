const express = require('express');
const userRouter = require('./user.router');
const carRouter = require('./car.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter)
router.use('/cars', carRouter)

module.exports = router;