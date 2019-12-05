'use strict'
const Developer = use('App/Models/Developer')

class DeveloperController {
    
    async index ({ request, response }) {
        return await Developer.all()
    };

    async show ({ request, response, params}) {
        return await Developer.find(params.id)
    };

    async store ({ request, response}){
        const developerData = request.only(['name', 'description', 'logo', 'youtube', 'instagram', 'facebook', 'web']);

        let developer = await Developer.create(developerData)

       response.json({
           respuesta: "Se ha creado con exito un developer"
       })
    };
        
}

module.exports = DeveloperController
