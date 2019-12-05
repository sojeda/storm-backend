'use strict'

const { validate } = use('Validator')

class LoginController {
  async login({ response, request, auth }) {
    const rules = {
      email: 'required|email',
      password: 'required'
    }

    const validation = await validate(request.post(), rules)

    if (validation.fails()) {
      return response.json(validation.messages())
    }

    const { email, password } = request.post()

    const token = await auth.attempt(email, password)

    return response.json({
      message: 'Usuario logueado',
      token
    })
  }

  async logout({ response, request, auth }) {

    const user = auth.user

    await auth
      .authenticator('jwt')
      .revokeTokens([user.token])

    response.json({
      message: 'Usuario deslogueado'
    })
  }
}

module.exports = LoginController
