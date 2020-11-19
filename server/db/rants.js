const connection = require('./connection')

function addRant (rant, db = connection) {
  return db('rants').insert(rant)
}

module.exports = {
  addRant
}
