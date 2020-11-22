const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = connection
