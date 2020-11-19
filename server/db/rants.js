const connection = require('./connection')


function getAllRants (db = connection) {
  return db('rants').select()
}

function addRant (rant, db = connection) {
  return db('rants').insert(rant)
}

module.exports = {
  addRant,
  getAllRants
}

