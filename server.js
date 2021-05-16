const express = require('express')
const path = require('path')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/api/location/search', async function (req, res, next) {
  try {
    const response = await axios.get(`https://www.metaweather.com/api/location/search?query=${req.query.query}`)
    res.json(response.data)
  } catch (err) {
    next(err)
  }
})

app.get('/api/location/:woeid', async function (req, res, next) {
  try {
    const response = await axios.get(`https://www.metaweather.com/api/location/${req.params.woeid}`)
    res.json(response.data)
  } catch (err) {
    next(err)
  }
})

const port = process.env.PORT || 3000
app.listen(port)
console.log('Server is listening on', port)
