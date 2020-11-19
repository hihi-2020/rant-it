const connection = require('./connection')

function getAllRants (db = connection) {
  return db('rants').select()
}

module.exports = {
  getAllRants
}
