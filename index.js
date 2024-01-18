const express = require('express')
const { readFile } = require('node:fs/promises')

const app = express()

const startedAt = new Date()

app.get('/', (_request, response) => {
  return response.send(`<h1>Hello, I'm ${process.env.NAME}. I'm ${process.env.AGE}</h1>`)
})

app.get('/healthz', (_request, response) => {
  const duration = new Date() - startedAt
  const durationSeconds = parseInt(duration / 1000)
  
  if (durationSeconds > 25) {
    return response.status(500).json({ durationSeconds })
  }
  
  return response.status(200).json({ ok: true })
})

app.get('/configmap', async (_request, response) => {
  const family = await readFile('myfamily/family.txt', 'utf8')
  
  if (!family) {
    return response.status(404).end()
  }
  
  return response.send(`<h1>My Family: ${family.toString()}.</h1>`)
})

app.get('/secret', (_request, response) => {
  return response.send(`<h1>User: ${process.env.USER}. Password: ${process.env.PASSWORD}.</h1>`)
})

app.listen(8000, () => console.log('nodejs started'));
