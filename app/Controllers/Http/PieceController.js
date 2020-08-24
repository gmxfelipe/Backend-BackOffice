'use strict'
const Piece = use('App/Models/Piece')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pieces
 */
class PieceController {
  /**
   * Show a list of all pieces.
   * GET pieces
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const piece = Piece.all()

    return piece
  }

  /**
   * Render a form to be used for creating a new piece.
   * GET pieces/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new piece.
   * POST pieces
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'nome',
      'catálogo',
      'número',
      'descrição',
      'procedência',
      'data',
      'transcrição'
    ])
  
    const piece = await Piece.create({ ...data })
  
    return piece
  }

  /**
   * Display a single piece.
   * GET pieces/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const piece = await Piece.findOrFail(params.id)

    await piece.load('images')
  
    return piece
  }

  /**
   * Render a form to update an existing piece.
   * GET pieces/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update piece details.
   * PUT or PATCH pieces/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const piece = await piece.findOrFail(params.id)

    const data = request.only([
      'nome',
      'catálogo',
      'número',
      'descrição',
      'procedência',
      'data',
      'transcrição'
    ])
  
    peca.merge(data)
  
    await piece.save()
  
    return piece
  }

  /**
   * Delete a piece with id.
   * DELETE pieces/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const piece = await Piece.findOrFail(params.id)

  
    await piece.delete()
  }
}

module.exports = PieceController
