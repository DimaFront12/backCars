const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { login, password } = req.body;
    User.findUserByCredentials(login, password)
        .then((user) => {
            const token = jwt.sign({ _id: user._id }, "some-secret-key", {
                expiresIn: 3600
            });

            return { user, token }
        })
        .then(({ user, token }) => {
            res
                .status(200)
                .send({
                    _id: user._id,
                    login: user.login,
                    jwt: token
                });
        })
        .catch(error => {
            console.log(error)
            res.status(401).send({ message: error.message });
        });
};

module.exports = { login };