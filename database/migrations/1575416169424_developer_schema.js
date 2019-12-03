'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeveloperSchema extends Schema {
  up () {
    this.create('developers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('developers')
  }
}

module.exports = DeveloperSchema
