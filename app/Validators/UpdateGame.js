'use strict'

class UpdateGame {
  get rules() {
    const gameId = this.ctx.params.id

    return {
      title: 'required',
      description: 'required',
      category_id: 'required',
      developer_id: 'required',
      price: 'required',
      apt: 'required',
      video: 'required',
      year: 'required|integer'
    }
  }
}

module.exports = UpdateGame
