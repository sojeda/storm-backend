'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

const Database = use('Database')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    password: await Hash.make('123456'),
    email: faker.email()
  }
})

Factory.blueprint('App/Models/Game', async (faker) => {

  const developers = await Database.select('id').from('developers')
  const categories = await Database.select('id').from('categories')
  const devIds = developers.map(dev => dev.id)
  const catIds = categories.map(cat => cat.id)

  return {
    title: faker.sentence({ words: 4 }),
    description: faker.paragraph(),
    developer_id: faker.pickone(devIds),
    category_id: faker.pickone(catIds),
    year: faker.integer({ min: 1000, max: 9999 }),
    apt: faker.bool({ likelihood: 70 }),
    video: faker.url(),
    price: faker.integer({ min: 1, max: 9999 })
  }
})

Factory.blueprint('App/Models/Developer', async (faker) => {
  return {
    name: faker.name(),
    description: faker.paragraph(),
    logo: faker.avatar({ protocol: "https" }),
    youtube: faker.domain(),
    instagram: faker.domain(),
    facebook: faker.domain(),
    web: faker.url(),
  }
})
