const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  res.send('Fullstack Master')
})

router.get('/new', (req, res) => {
  res.send('Fullstack Master')
})

module.exports = router