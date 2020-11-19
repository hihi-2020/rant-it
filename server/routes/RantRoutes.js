const express = require('express')

<<<<<<< HEAD:server/routes/fruits.js
// const db = require('../db/fruits')
=======
>>>>>>> StillNotBuyingABox:server/routes/RantRoutes.js

const router = express.Router()


router.get('/', (req, res) => {
  db.getAllRants()
    .then(results => {
      res.json({ rants: results.map(rant => rant.title) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "You've been HACKED" })
    })
})

<<<<<<< HEAD:server/routes/fruits.js
=======

router.get('/:author', (req, res) => {
  db.getAuthor()
    .then(results => {
      res.json({ author: results.map(author => rant.author) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "You've been HACKED" })
    })
})
>>>>>>> StillNotBuyingABox:server/routes/RantRoutes.js


module.exports = router
