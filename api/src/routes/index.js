const Router = require('express')

const usersRouter = require('./user.routes')

const routes = Router()
routes.post('/user', usersRouter)