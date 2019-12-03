'use strict'

class UpdateUser {
  get rules () {
    const userId = this.ctx.params.id

    return {
      email: `required|email|unique:users,email,id,${userId}`,
      username: `required|unique:users,username,id,${userId}`,
      password: 'required'
    }
  }
}

module.exports = UpdateUser
