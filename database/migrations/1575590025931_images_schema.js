'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagesSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table.timestamps()
      table.string('url', 512).notNullable().unique()
      table.integer('game_id')
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImagesSchema
