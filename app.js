const express = require('express')
const getSubmissions = require('./api')
const app = express()
const port = 3000

app.get('/', getSubmissions);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})