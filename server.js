require('dotenv').config()

global.CustomError = require('./app/functions/CustomError')

const helmet = require('helmet')
const express = require('express')
const compression = require('compression')

const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { cors } = require('./app/middlewares/cors')
const { errorHandler } = require('./app/functions/errorHandler')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(compression())
app.use(helmet()) 
app.use(cors)

const routes = require('./app/routes/index')
routes.map((x) => app.use('/api/v1' + x.basePath, x.router))

app.use(express.static('public'))
app.use((err, req, res, next) => { errorHandler(err, req, res, next) })
app.use((req, res) => {
  res.status(404)
    .json({
      code: 404,
      message: 'Not found',
      success: false,
      data: [],
    })
})

const server = app.listen(process.env.PORT, () => {
  const host = server.address().address
  const { port } = server.address()
  console.log(`App listening at ${host}:${port}`)
})
