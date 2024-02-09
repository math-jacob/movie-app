const { Router } = require('express')
const NotesController = require('../controllers/NotesController')

const notesRouter = new Router()

const notesController = new NotesController()

notesRouter.post('/:user_id', notesController.create)

module.exports = notesRouter