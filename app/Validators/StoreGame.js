'use strict'

class StoreGame {
  get rules() {
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

module.exports = StoreGame
