'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.resource('/pieces', 'PieceController')
  .apiOnly()
  .middleware('auth')
  Route.post('pieces/:id/images', 'ImageController.store')
  .middleware('auth')