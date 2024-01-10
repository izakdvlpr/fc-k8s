const express = require('express')

const app = express()

app.get('/', (_request, response) => {
  response.json({ okkkkkkkkkkkkkkk: true })
})

app.listen(3333, () => console.log('nodejs started'));
