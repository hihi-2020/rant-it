exports.up = function (knex) {
  return knex.schema.createTable('comments', table => {
    table.increments('id')
    table.string('comment')
    table.string('author')
    table.integer('rant_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('comments')
}
