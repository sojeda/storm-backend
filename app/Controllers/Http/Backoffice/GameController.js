'use strict'

const Game = use('App/Models/Game')

class GameController {
    async index({ request, response }) {
        return await Game.all()
    }

    async store({ request, response }) {
        const { title, description, developer_id, year, apt, video, price } = request.all();

        const game = await Game.create({ title, description, developer_id, year, apt, video, price })
        response.json({
            message: 'game esta mal',
            game
        })
    }

    async show({ request, response, params }) {
        try {
            return await Game.find(params.id)
        } catch (error) {
            response.send('Missing or invalid jwt token')
        }
    }

    async update({ request, response, params }) {
        try {
            const { title, description, developer_id, year, apt, video, price } = request.all();

            let game = await Game.find(params.id)

            game.merge({ title, description, developer_id, year, apt, video, price });

            await game.save();

            response.json({
                message: 'El juego se actualizó exitosamente',
                game
            })
        } catch (error) {
            response.send(error)
        }
    }

    async destroy({ request, response, params }) {
        const { id } = params;

        try {
            let game = await Game.find(id);
            await game.delete()
            response.status(200).json({
                message: 'El juego se borró exitosamente'
            })
        } catch (error) {
            response.status(500).send(error)
        }
    }
}

module.exports = GameController
