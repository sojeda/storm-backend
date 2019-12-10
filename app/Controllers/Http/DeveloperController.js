'use strict'
const Developer = use('App/Models/Developer')

class DeveloperController {

    async index ({ request, response }) {
        return await Developer.all()
    };

    async show ({ request, response, params }) {
       return await Developer.find(params.id)
    };

};

module.exports = DeveloperController
