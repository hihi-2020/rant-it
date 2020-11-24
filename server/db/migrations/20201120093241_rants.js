exports.up = function (knex) {
  return knex.schema.createTable('rants', table => {
    table.increments('id')
    table.text('title')
    table.text('rant')
    table.string('author')
    table.integer('date')

  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('rants')
}
