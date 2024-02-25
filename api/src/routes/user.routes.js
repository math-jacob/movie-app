const { Router } = require('express')
const UserController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRouter = new Router()

const usersController = new UserController()

usersRouter.post("/", usersController.create)
usersRouter.put("/", ensureAuthenticated, usersController.update)

module.exports = usersRouter