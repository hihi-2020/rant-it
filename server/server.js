const express = require('express')
const path = require('path')

const RantRoutes = require('./routes/RantRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/rants', RantRoutes)

module.exports = server
