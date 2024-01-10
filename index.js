const express = require('express')

const app = express()

app.get('/', (_request, response) => {
  response.send('<h1>Hello FullCycle</h1>')
})

app.listen(8000, () => console.log('nodejs started'));
