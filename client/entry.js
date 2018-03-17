'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const path = require('path');

app.use(bodyParser.json())

console.log(path.join(__dirname, 'public'))

app.listen(8080, () => {
  console.log('listening on port 8080')
})

app.use('/', express.static(path.join(__dirname, 'public')))

