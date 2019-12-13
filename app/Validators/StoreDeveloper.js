'use strict'

class StoreDeveloper {
  get rules () {
    return {
      name: `required|unique:developers`,
      logo:'required',
      description: 'required'
    }
  }
}

module.exports = StoreDeveloper
