'use strict'

class StoreDevelopers {
  get rules () {
    return {
      name: 'required|unique:developers',
      password: 'required'
    }
  }
}

module.exports = StoreDevelopers
