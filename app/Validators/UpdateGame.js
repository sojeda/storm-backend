'use strict'

class UpdateGame {
  get rules() {
    const gameId = this.ctx.params.id

    return {
      name: `required`
    }
  }
}

module.exports = UpdateGame
