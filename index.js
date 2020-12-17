const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

//for todolist
// const data = fs.readFileSync('todo.json', 'utf8')
// const todoList = JSON.parse(data)
// app.get('/', (req, res) => {
//   res.send(todoList)
// })

//code for covid data
const data = fs.readFileSync('covid.json', 'utf8')
const covidData = JSON.parse(data)

app.get('/covidCases', (req, res) => {
  const country = req.query.country
  
  const result = []

  for (let record of covidData.records){
    if(record.countriesAndTerritories == country){
      result.push(record)
    }
  }
  res.json(result)
  // res.send(covidData)
})

app.listen(port, () => {
  console.log(`Web server listening at http://localhost:${port}`)
})