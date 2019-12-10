'use strict'

const Category = use('App/Models/Category')

class CategoryController {
  async index ({ request, response }){
    return await Category.all()
  }
  
  async show({ request, response, params }) {
    return await Category.find(params.id) 
  }

}

module.exports = CategoryController
