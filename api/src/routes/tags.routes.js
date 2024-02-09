const { Router } = require('express')
const TagsController = require('../controllers/TagsController')

const tagsRouter = new Router()

const tagsController = new TagsController()

tagsRouter.get('/:user_id', tagsController.index)

module.exports = tagsRouter