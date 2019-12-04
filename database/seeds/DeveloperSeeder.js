'use strict'

/*
|--------------------------------------------------------------------------
| DeveloperSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DeveloperSeeder {
  async run () {
    const developersArray = await Factory
      .model('App/Models/Developer')
      .createMany(5)
  }
}

module.exports = DeveloperSeeder
