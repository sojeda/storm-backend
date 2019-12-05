'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.timestamps()
<<<<<<< HEAD
=======
      table.string('name', 80).notNullable().unique()
>>>>>>> f47ea98d17137bee2313bed09d56ab919ac364a2
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
