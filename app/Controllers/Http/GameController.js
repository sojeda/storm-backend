'use strict'

const Game = use('App/Models/Game')

class GameController {
    async index({ request, response }) {
        return await Game.all()
    }

    async show({ request, response, params }) {
        try {
            const game = await Game.find(params.id)
            if (!game) {
                return response.send('Not found')
            }
            return response.json({ game })
        } catch (error) {
            response.send('Error')
        }
    }
}

module.exports = GameController
