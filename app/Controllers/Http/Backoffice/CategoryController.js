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

  async update ({ request, response, params }) {
    const { id } = params
    const { name } = request.all()
    let category = await Category.find(id)

    try {
      category.merge({ name })
      await category.save()      
      response.json({
        message: 'La categoria se actualizo',
        category: {
          id: category.id,
          name: category.name
        }
      })
    } catch (error) {
      response.status(500).send(error)
      console.log(error)
    }
  }

  async destroy ({ request, response, params }) {
    const { id } = params
    let category = await Category.find(id)

    try {
      await category.delete()
      category = await Category.find(id)
      response.json({
        message: 'Categoria borrada con exito'
      })
    } catch (error) {
      response.status(500).json({
        message: 'No se pudo borrar la categoria'
      })
    }
  }
}

module.exports = CategoryController
