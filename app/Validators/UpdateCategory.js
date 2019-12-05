'use strict'

class UpdateCategory {
  get rules () {
    const categoryId = this.ctx.params.id

    return {
      name: `required|unique:categories,name,id,${categoryId}`
    }
  }
}

module.exports = UpdateCategory
