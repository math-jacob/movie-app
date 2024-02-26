const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const UserController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')

const usersRouter = new Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UserController()
const userAvatarController = new UserAvatarController()

usersRouter.post('/', usersController.create)
usersRouter.put('/', ensureAuthenticated, usersController.update)
usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update)

module.exports = usersRouter