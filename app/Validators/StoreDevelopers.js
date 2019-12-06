'use strict'

class StoreDevelopers {
  get rules () {
    return {
      name: `required|unique:developer,name,id,${developerId}`,
      password: 'required',
      logo:'required'
    }
  }
}

module.exports = StoreDevelopers
