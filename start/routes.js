'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('login', 'LoginController.login')
Route.post('logout', 'LoginController.logout')

Route.resource('users', 'UserController')
  .apiOnly()
  .middleware(new Map([
    [['update', 'destroy'], ['auth']]
  ]))
  .validator(new Map([
    [['users.store'], ['StoreUser']],
    [['users.update'], ['UpdateUser']]
  ]))

//Routes Developer  
//Routes Front
Route.group(() => {
    Route.get('/', 'DeveloperController.index' )   
    Route.get('show/:id', 'DeveloperController.show')  
}).prefix('developer')

//Routes Back
Route.resource('admin/developers', 'Backoffice/DevelopersControllers')
  .apiOnly()
  .middleware(new Map([
    [['update', 'destroy'], ['auth']]
  ]))
  .validator(new Map([
    [['developers.store'], ['StoreDevelopers']],
    [['developers.update'], ['UpdateDevelopers']]
  ]));
  

Route.resource('admin/users', 'Backoffice/UserController').apiOnly().middleware(['auth']);

