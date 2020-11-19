const express = require('express')


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


module.exports = router
