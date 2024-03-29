'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Game extends Model {

    category() {
        return this.belongsTo('App/Models/Category')
    }

    developer() {
        return this.belongsTo('App/Models/Developer')
    }

}

module.exports = Game
