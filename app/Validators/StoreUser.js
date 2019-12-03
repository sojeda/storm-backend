'use strict'

class StoreUser {
  get rules () {
    const userId = this.ctx.params.id
    const username = this.ctx.params.id

    return {
      email: `required|email|unique:users,email,id,${userId}`,
      username: `required|unique:users,username,id,${username}`,
      password: 'required'
    }
  }
}

module.exports = StoreUser
