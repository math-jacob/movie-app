const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body
    const { user_id } = request.params

    if (rating < 1 | rating > 5) {
      throw new AppError('A nota para o filme deve estar entre 1 e 5.')
    }

    const [note_id] = await knex('notes').insert({
      title,
      description,
      rating,
      user_id,
    })

    const tagsInsert = tags.map(tag => {
      return {
        name: tag,
        note_id,
        user_id
      }
    })

    await knex('tags').insert(tagsInsert)

    return response.status(201).json()
  }
}

module.exports = NotesController;