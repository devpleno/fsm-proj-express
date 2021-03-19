const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Fullstack Master')
})

router.get('/pagina1', (req, res) => {
  res.send('Fullstack Master')
})

module.exports = router