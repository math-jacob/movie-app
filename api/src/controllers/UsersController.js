const { hash, compare } = require('bcryptjs');
const AppError = require("../utils/AppError");
const knex = require('../database/knex');

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body

    const [userAlreadyExists] = await knex('users').where({ email })

    if (userAlreadyExists) {
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = hash(password, 8)

    await knex('users').insert({
      name,
      email,
      password: hashedPassword
    })

    return response.status(201).json()
  }
}

module.exports = UserController