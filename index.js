const express = require('express')
const routes = require('./routes/index')

//crear el servidor
const app = express()

app.use(routes())

//escuchar en el puerto 5000
app.listen(5000)