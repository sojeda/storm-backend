'use strict'

class UpdateDeveloper {
  get rules () {
    const developerId = this.ctx.params.id

    return {
      name: `required|unique:developers,name,id,${developerId}`,
      description:'required',
      logo:'required'
    }
  }
}

module.exports = UpdateDeveloper
