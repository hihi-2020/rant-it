const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')
const rantRoutes = require ('./routes/rants')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/rants', rantRoutes)


module.exports = server
