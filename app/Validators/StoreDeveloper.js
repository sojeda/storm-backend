'use strict'

class StoreDeveloper {
  get rules () {
    return {
      name: `required|unique:developer,name,id,${developerId}`,
      password: 'required',
      logo:'required'
    }
  }
}

module.exports = StoreDeveloper
