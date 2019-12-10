'use strict'

const User = use('App/Models/User')

class UserController {
    async index({ request, response }) {
        return await User.all()
    }

    async store({ request, response, auth }) {
        const { username, password, email } = request.all();
        const user = await User.create({ username, password, email })
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

    async show({ request, response }) {
        const user = await User.find(request.params.id)
        response.json(user)
    }

    update({ request, response }) {
        response.json({})
    }

    destroy({ request, response }) {
        response.json({})
    }
}
module.exports = UserController