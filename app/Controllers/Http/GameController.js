'use strict'

const Game = use('App/Models/Game')

class GameController {
    async index({ request, response }) {
        return await Game.all()
    }

    async show({ request, response, params }) {
        try {
            return await Game.find(params.id)
        } catch (error) {
            response.send('Missing or invalid jwt token')
        }
    }
}

module.exports = GameController
