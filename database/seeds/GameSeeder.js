'use strict'

/*
|--------------------------------------------------------------------------
| GameSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class GameSeeder {
  async run() {
    const gamesArray = await Factory
      .model('App/Models/Game')
      .createMany(20)
  }
}

module.exports = GameSeeder
