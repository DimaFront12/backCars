const User = require("../models/user")
const bcrypt = require("bcryptjs")

const findAllUsers = async (req, res, next) => {
    req.usersArray = await User.find({}, { password: 0 });
    next();
}

const findUserById = async (req, res, next) => {
    try {
        req.user = await User.findById(req.params.id, { password: 0 });
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
    }
};

const createUser = async (req, res, next) => {
    try {
        req.user = await User.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
    }
};

const checkIsUserExists = async (req, res, next) => {
    const isInArray = req.usersArray.find((user) => {
        return req.body.login === user.login;
    });
    if (isInArray) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Пользователь с таким логином уже существует" }));
    } else {
        next();
    }
};

const checkEmptyNameAndPassword = async (req, res, next) => {
    if (!req.body.login || !req.body.password) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Заполни все поля" }));
    } else {
        next();
    }
};

const hashPassword = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        next();
    } catch (error) {
        res.status(400).send({ message: "Ошибка хеширования пароля" });
    }
};

module.exports = { findAllUsers, createUser, checkIsUserExists, checkEmptyNameAndPassword, hashPassword, findUserById }