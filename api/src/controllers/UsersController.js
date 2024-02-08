const { hash, compare } = require('bcryptjs');
const knex = require('../database/knex');

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body

    const checkUserExists = await knex('users').where({ email })

    if (checkUserExists) {
      console.log('User already exists')
    }

    const hashedPassword = hash(password, 8)

    await knex('users').insert({
      name,
      email,
      password
    })
  }
}

module.exports = UserController;