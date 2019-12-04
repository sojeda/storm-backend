'use strict'

class UpdateDevelopers {
  get rules () {
    const developerId = this.ctx.params.id

    return {
      name: `required|unique:developers,name,id,${developerId}`,
      password: 'required'
    }
  }
}

module.exports = UpdateDevelopers
