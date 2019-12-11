'use strict'

class StoreDeveloper {
  get rules () {
    return {
      name: `required|unique`,
      password: 'required',
      logo:'required',
      description: 'required'
    }
  }
}

module.exports = StoreDeveloper
