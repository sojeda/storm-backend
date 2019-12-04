'use strict'

class StoreGame {
  get rules() {
    return {
      title: 'required',
      description: 'required',
      developer_id: 'required',
      price: 'required',
      apt: 'required',
      video: 'required',
      year: 'required'
    }
  }
}

module.exports = StoreGame
