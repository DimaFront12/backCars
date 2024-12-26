const usersRouter = require("./usersRouter");
const authRouter = require("./authRouter");
const carsRouter = require("./carsRouter");
const postsRouter = require("./postsRouter");

const apiRouter = require("express").Router();

apiRouter.use("/api", usersRouter);
apiRouter.use("/api", authRouter);
apiRouter.use("/api", carsRouter);
apiRouter.use("/api", postsRouter);

module.exports = apiRouter;