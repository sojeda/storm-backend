'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CategorySeeder {
  async run () {
    const Category = use('App/Models/Category')

    let category = new Category()
    category.name = 'Free to play'
    await category.save()

    category = new Category()
    category.name = 'Acciòn'
    await category.save()

    category = new Category()
    category.name = 'Aventura'
    await category.save()

    category = new Category()
    category.name = 'Carreras'
    await category.save()

    category = new Category()
    category.name = 'Deportes'
    await category.save()

    category = new Category()
    category.name = 'Estrategia'
    await category.save()

    category = new Category()
    category.name = 'Indie'
    await category.save()

    category = new Category()
    category.name = 'Multijugador'
    await category.save()

    category = new Category()
    category.name = 'Rol'
    await category.save()

    category = new Category()
    category.name = 'Simuladores'
    await category.save()

    category = new Category()
    category.name = 'Real Life'
    await category.save()

    category = new Category()
    category.name = 'Realidad Virtual'
    await category.save()
  }
}

module.exports = CategorySeeder
