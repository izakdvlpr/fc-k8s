const express = require('express')

const app = express()

app.get('/', (_request, response) => {
  response.send(`<h1>Hello, I'm ${process.env.NAME}. I'm ${process.env.AGE}</h1>`)
})

app.listen(8000, () => console.log('nodejs started'));
