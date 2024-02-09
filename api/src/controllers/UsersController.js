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

    const hashedPassword = await hash(password, 8)

    await knex('users').insert({
      name,
      email,
      password: hashedPassword
    })

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const { id } = request.params

    const [user] = await knex('users').where({ id })
    console.log(user)

    if (!user) {
      throw new AppError('Usuário não encontrado.')
    }

    const [userWithUpdateEmail] = await knex('users').where({ email })
    
    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new AppError('Este e-mail já está em uso.')
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError('Você precisa informar a senha antiga.')
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError('A senha antiga não confere.')
      }

      user.password = await hash(password, 8)
    }

    const new_name = user.name
    const new_email = user.email
    const new_password = user.password
    await knex('users')
      .where({ id })
      .update({
        name: new_name,
        email: new_email,
        password: new_password
      })

    return response.json()
  }
}

module.exports = UserController