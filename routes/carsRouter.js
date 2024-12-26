const carsRouter = require("express").Router();

const { findAllCars } = require("../middlewares/cars")
const { sendAllCars } = require("../controllers/cars")

carsRouter.get("/cars", findAllCars, sendAllCars)

module.exports = carsRouter;