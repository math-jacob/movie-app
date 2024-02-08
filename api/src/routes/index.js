const { Router } = require('express')

const usersRouter = require('./user.routes')

const routes = Router()
routes.post('/users', usersRouter)

module.exports = routes