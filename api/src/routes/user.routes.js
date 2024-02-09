const { Router } = require('express')
const UserController = require('../controllers/UsersController')

const usersRouter = new Router()

const usersController = new UserController()

usersRouter.post("/", usersController.create)
usersRouter.put("/:id", usersController.update)

module.exports = usersRouter