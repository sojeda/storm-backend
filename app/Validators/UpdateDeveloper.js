'use strict'

class UpdateDeveloper {
  get rules () {
    const developerId = this.ctx.params.id

    return {
      name: `required|unique:developer,name,id,${developerId}`,
      description:'required',
      logo:'required',
      youtube:'required',
    }
  }
}

module.exports = UpdateDeveloper
