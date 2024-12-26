const sendAllCars = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.allCars))
}

module.exports = { sendAllCars }