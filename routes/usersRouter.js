const usersRouter = require('express').Router();

const { findAllUsers, checkIsUserExists, checkEmptyNameAndPassword, hashPassword, createUser, findUserById } = require("../middlewares/users")
const { sendUserCreated, sendMe, sendUserById } = require("../controllers/users");
const { checkAuth } = require('../middlewares/auth');

usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndPassword,
    hashPassword,
    createUser,
    sendUserCreated
);

usersRouter.get("/me", checkAuth, sendMe); 

usersRouter.get('/users/:id', findUserById, sendUserById);


module.exports = usersRouter