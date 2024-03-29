const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body
    const user_id = request.user.id

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

  async show(request, response) {
    const { id } = request.params

    const note = await knex('notes').where({ id }).first()
    const tags = await knex('tags').where({ note_id: id }).orderBy('name')

    return response.json({
      ...note,
      tags
    })
  }

  async delete(request, response) {
    const { id } = request.params

    const note = await knex('notes').where({ id }).delete()

    return response.json()
  }

  async index(request, response) {
    const { title, tags } = request.query
    const user_id = request.user.id

    let notes

    if (tags) {
      const filterTags = tags.split(',').map(tag => tag.trim());

      notes = await knex('tags')
        .select([
          'notes.id',
          'notes.title',
          'notes.description',
          'notes.rating',
          'notes.user_id',
          'notes.created_at',
          'notes.updated_at'
        ])
        .where('notes.user_id', user_id)
        .whereLike('notes.title', `%${title}%`)
        .whereIn('name', filterTags)
        .innerJoin('notes', 'notes.id', 'tags.note_id')
        .orderBy('notes.title')
        .groupBy('notes.title')
    } 
    else {
      notes = await knex('notes')
      .where({user_id})
      .whereLike('title', `%${title}%`)
      .orderBy('title')
    }

    const userTags = await knex('tags').where({user_id})
    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id)

      return {
        ...note,
        tags: noteTags
      }
    })

    return response.json(notesWithTags)
  }
}

module.exports = NotesController;