'use strict'

class StoreDeveloper {
  get rules () {
    return {
      name: `required|unique`,
      password: 'required',
      logo:'required'
    }
  }
}

module.exports = StoreDeveloper
