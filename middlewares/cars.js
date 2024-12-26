const cars = require("../models/car");

const findAllCars = async (req, res, next) => {
    req.allCars = await cars.find({});
    next();
}

module.exports = { findAllCars }