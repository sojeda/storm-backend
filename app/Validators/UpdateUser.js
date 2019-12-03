'use strict'

class UpdateUser {
  get rules () {
    return {
      email: 'required|email|unique:users',
      username: 'required|unique:users',
      password: 'required'
    }
  }
}

module.exports = UpdateUser
