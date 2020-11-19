const connection = require('./connection')

function addRant (rant, db = connection) {
  return db('rants').insert(rant)
}



function getAllRants (db = connection) {
  return db('rants').select()
}


module.exports = {
  addRant,
  getAllRants
}
