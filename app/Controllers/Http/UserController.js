'use strict'

const User = use('App/Models/User')

class UserController {
  async index ({ request, response }) {
    return await User.all()
  }

  async store ({ request, response, auth }) {
    const { username, password, email } = request.all();

    const user = await User.create({ username, password, email  })

    const token = await auth.generate(user)

    response.json({
      message: 'El usuario ha sido creado exitosamente',
      token,
      user: {
        username: user.username,
        email: user.email,
      },
    })
  }

  async show ({ request, response, auth }) {
    try {
      return await auth.getUser()
    } catch (error) {
      response.send('Missing or invalid jwt token')
    }
  }

  async update ({ request, response, auth }) {
    try {
      const { username, email } = request.all();

      let user = await auth.getUser()

      user.fill({ username, email })

      await user.save()

      response.json({
        message: 'El usuario ha sido actualizado exitosamente',
        user: {
          username: user.username,
          email: user.email,
        },
      })
    } catch (error) {
      response.send('Missing or invalid jwt token')
    }
  }

  destroy ({ request, response }) {
    response.json({})
  }
}

module.exports = UserController
