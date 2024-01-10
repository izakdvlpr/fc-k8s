const express = require('express')
const {readFile} = require('node:fs/promises')

const app = express()

app.get('/', (_request, response) => {
  return response.send(`<h1>Hello, I'm ${process.env.NAME}. I'm ${process.env.AGE}</h1>`)
})

app.get('/configmap', async (_request, response) => {
  const family = await readFile('myfamily/family.txt', 'utf8')
  
  if (!family) {
    return response.status(404).end()
  }
  
  return response.send(`<h1>My Family: ${family.toString()}.</h1>`)
})

app.listen(8000, () => console.log('nodejs started'));
