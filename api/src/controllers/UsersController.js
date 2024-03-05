const { hash, compare } = require('bcryptjs');
const AppError = require("../utils/AppError");
const knex = require('../database/knex');
const UserRepository = require('../repositories/UserRepository')
const UserCreateService = require('../services/UserCreateService')

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body

    const userRepository = new UserRepository()
    const userCreateService = new UserCreateService(userRepository)

    await userCreateService.execute({ name, email, password })

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const user_id = request.user.id

    const [user] = await knex('users').where({ id: user_id })
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
      .where({ id: user_id })
      .update({
        name: new_name,
        email: new_email,
        password: new_password
      })

    return response.json()
  }
}

module.exports = UserController