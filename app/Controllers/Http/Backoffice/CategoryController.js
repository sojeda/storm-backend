'use strict'

const Category = use('App/Models/Category')

class CategoryController {
  async index ({ request, response }) {
    return await Category.all()
  }

  async store ({ request, response, auth }) {
    const { name } = request.all()

    const category = await Category.create({ name })

    response.json({
      message: 'La categoria ha sido creada exitosamente',
      category: {
        id: category.id,
        name: category.name
      }
    })
  }

  async show ({ request, response }) {
    const category = await Category.find(request.params.id)

    response.json(category)
  }

  update ({ request, response }) {
    response.json({})
  }

  async destroy ({ request, response, params }) {
    
    const { id } = params
    
    let category = await Category.find(id)

    await category.delete()

    category = await Category.find(id)

    if (category==null) {
      response.json({
        message: 'Categoria borrada con exito'
      })
    }
    response.json({
      message: 'No se pudo borrar la categoria'
    })
  }
}

module.exports = CategoryController
