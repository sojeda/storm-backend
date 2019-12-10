'use strict'

class StoreDeveloper {
  get rules () {
    return {
      name: `required|unique:developers`,
      password: 'required',
      logo:'required'
    }
  }
}

module.exports = StoreDeveloper
