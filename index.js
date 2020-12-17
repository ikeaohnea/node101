const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

const data = fs.readFileSync('todo.json', 'utf8')
const todoList = JSON.parse(data)

app.get('/', (req, res) => {
  res.send(todoList)
})

app.listen(port, () => {
  console.log(`Web server listening at http://localhost:${port}`)
})