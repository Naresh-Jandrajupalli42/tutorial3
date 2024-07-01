const express = require('require')
const app = express()
app.get('/gadgets', (request, response) => {
  response.sendFile('./gadgets.html', {root: __dirname})
})

module.exports = app
