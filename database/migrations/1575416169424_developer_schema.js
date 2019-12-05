'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeveloperSchema extends Schema {
  up () {
    this.create('developers', (table) => {
      table.increments()
      table.string("name")
      table.text("description")
      table.string("logo")
      table.string("youtube").nullable()
      table.string("instagram").nullable()
      table.string("facebook").nullable()
      table.string("web").nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('developers')
  }
}

module.exports = DeveloperSchema
