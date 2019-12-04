'use strict'

const Game = use('App/Models/Game')

class GameController {
    async index({ request, response }) {
        return await Game.all()
    }

    async store({ request, response }) {
        const { title, description, developer_id, price, apt } = request.all();

        const game = await Game.create({ title, description, developer_id, price, apt })

        response.json({
            message: 'game esta mal',
            game: {
                title: game.title,
                description: game.description,
                developer_id: game.developer_id,
                price: game.price,
                apt: game.apt,
                video: game.video,
                year: game.year
            },
        })
    }

    async show({ request, response, params }) {
        try {
            return await Game.find(params.id)
        } catch (error) {
            response.send('Missing or invalid jwt token')
        }
    }

    async update({ request, response }) {
        try {
            const { title, description, developer_id, price, apt } = request.all();

            game.fill({ title, description, developer_id, price, apt })

            await game.save()

            response.json({
                message: 'El usuario ha sido actualizado exitosamente',
                game: {
                    title: game.title,
                    description: game.description,
                    developer_id: game.developer_id,
                    price: game.price,
                    apt: game.apt,
                    video: game.video,
                    year: game.year
                },
            })
        } catch (error) {
            response.send('Missing or invalid jwt token')
        }
    }

    destroy({ request, response }) {
        response.json({})
    }
}

module.exports = GameController
