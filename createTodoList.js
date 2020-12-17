const fs = require('fs')
const moment = require('moment')

const todo1 = {
  text: 'Pack for holidays',
  date: moment('17.12.2020, 10:10', 'DD.MM.YYYY, hh:mm'),
  id: 1,
  done: false
}
const todo2 = {
  text: 'Cook BiBimBap',
  date: moment('13.12.2020, 02:10', 'DD.MM.YYYY, hh:mm'),
  id: 2,
  done: false
}
const todo3 = {
  text: 'Get hair trimmed',
  date: moment('10.12.2020, 16:00', 'DD.MM.YYYY, hh:mm'),
  id: 3,
  done: false
}
const todoList = [
  todo1,
  todo2,
  todo3
]
const json = JSON.stringify(todoList)
fs.writeFileSync('todo.json', json)
