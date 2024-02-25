const { Router } = require('express')
const TagsController = require('../controllers/TagsController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const tagsRouter = new Router()

const tagsController = new TagsController()

tagsRouter.get('/', ensureAuthenticated, tagsController.index)
tagsRouter.delete('/:id', tagsController.delete)

module.exports = tagsRouter