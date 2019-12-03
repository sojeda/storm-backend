'use strict'

class StoreUser {
  get rules () {
    return {
      email: 'required|email|unique:users',
      username: 'required|unique:users',
      password: 'required'
    }
  }
}

module.exports = StoreUser
