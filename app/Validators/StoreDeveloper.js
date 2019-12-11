'use strict'

class StoreDeveloper {
  get rules () {
    return {
      name: `required|unique`,
      logo:'required',
      description: 'required'
    }
  }
}

module.exports = StoreDeveloper
