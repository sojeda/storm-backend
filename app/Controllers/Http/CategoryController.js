'use strict'

const Category = use('App/Models/User')

class CategoryController {
  async index ({ request, response }){
    return await Category.all()
  }
}

module.exports = CategoryController
