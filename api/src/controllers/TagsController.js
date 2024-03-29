const knex = require('../database/knex')

class TagsController {
  async index(request, response) {
    const user_id = request.user.id

    const tags = await knex('tags')
    .where({ user_id })
    .groupBy('name')

    return response.json(tags)
  }

  async delete(request, response) {
    const { id } = request.params

    await knex('tags').where({ id }).delete()

    return response.json()
  }
}

module.exports = TagsController