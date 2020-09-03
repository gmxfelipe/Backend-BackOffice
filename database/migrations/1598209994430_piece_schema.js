'use strict'

const Schema = use('Schema')

class PieceSchema extends Schema {
  up () {
    this.create('pieces', table => {
      table.increments()
      table.string('nome').notNullable()
      table.string('catálogo').notNullable()
      table.decimal('número').notNullable()
      table.string('descrição').notNullable()
      table.string('procedência').notNullable()
      table.date('data').notNullable()
      table.string('transcrição').notNullable()

      table.timestamps()
    }) 
  }

  down () {
    this.drop('pieces')
  }
}

module.exports = PieceSchema
