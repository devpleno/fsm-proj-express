const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')

/*
app.use((req, res, next) => {
  console.log('passou por aqui')
  // res.send('não chama nada mais')
  next()
})
*/

app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.listen(port, () => console.log('Listening on port: ' + port))