'use strict'
const Developer = use('App/Models/Developer')

class DeveloperController {
    
    async index ({ request, response }) {
        return await Developer.all()
    }

    async show ({ request, response, params}) {
        return await Developer.find(params.id)
    }

    async store ({ request, response}){
        const developerData = request.only(['name', 'description', 'logo', 'youtube', 'instagram', 'facebook', 'web']);

        let developer = await Developer.create(developerData)

       response.json({
           respuesta: "Se ha creado con exito un developer"
       })
    }

    async update ({ request, response, auth, params }) {
        try {
          const { name, description, logo, youtube, instagram, facebook, web   } = request.all();
    
          let developer = await Developer.find(params.id)
    
          developer.merge({ name, description, logo, youtube, instagram, facebook, web   })
    
          await developer.save()
    
          response.json({
            message: 'Se actualizaron los datos del Developer correctamente',
            developer: {
              name, 
              description, 
              logo, 
              youtube, 
              instagram, 
              facebook, 
              web  
            },
          })
        } catch (error) {
          response.send('Ah ocurrido un error en el servidor')
        };
    }

    
        
}

module.exports = DeveloperController
