import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import fs from 'fs'

dotenv.config()

import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

connectDB()

const app = express()

app.use(express.json())
app.use(morgan('combined'))

function logResponseBody(req, res, next) {
  var oldWrite = res.write,
    oldEnd = res.end

  var chunks = []

  res.write = function (chunk) {
    chunks.push(chunk)

    return oldWrite.apply(res, arguments)
  }

  res.end = function (chunk) {
    if (chunk) chunks.push(chunk)

    var body = Buffer.concat(chunks).toString('utf8')

    fs.appendFile(
      'backend/logs.txt',
      '[' +
        ' date: ' +
        Date.now() +
        ', req path: ' +
        req.path +
        ', req body: ' +
        JSON.stringify(req.body) +
        ',response body: ' +
        body +
        ']' +
        '\n',
      function (err) {
        if (err) throw err
      }
    )

    oldEnd.apply(res, arguments)
  }

  next()
}

app.use(logResponseBody)

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
