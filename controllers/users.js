const sendUserCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.user)
    res.end(JSON.stringify(req.user));
};

const sendMe = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.user)
    res.end(JSON.stringify(req.user));
};

const sendUserById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

module.exports = { sendUserCreated, sendMe, sendUserById }