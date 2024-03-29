'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GameSchema extends Schema {
  up() {
    this.create('games', (table) => {
      table.increments()
      table.string('title')
      table.text('description')
      table
        .integer('developer_id')
        .unsigned()
        .references('id')
        .inTable('developers')
        .onDelete('cascade')
        .onUpdate('cascade')
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('cascade')
        .onUpdate('cascade')
      table.integer('year')
      table.boolean('apt')
      table.string('video')
      table.integer('price')
      table.timestamps()

    })
  }

  down() {
    this.drop('games')
  }
}

module.exports = GameSchema
