const express = require('express')

const fs = require('fs')

const app = express()

app.use(express.json())

const db = { numbers: [] }

const userList = { users: [] }

app.get('/currentDate', (req, res) => {
  let day = new Date().getTime()
  let date = new Date(day)
  let stringDay = date.toString()
  res.send(stringDay)
})

app.get('/greet', (req, res) => {
  res.send('Hello World')
})

app.get('/greet/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`)
})

app.get('/checkEvenNumber/:number', (req, res) => {
  if (Number(req.params.number)) {
    if (+req.params.number % 2 === 0) res.status(200).send('Even')
    else if (+req.params.number % 2 !== 0) res.status(400).send('Odd')
  } else res.status(400).send(`${req.params.number} is not a number`)
})

app.get('/add/:number1/:number2', (req, res) => {
  let param1 = +req.params.number1
  let param2 = +req.params.number2
  let suma = param1 + param2

  if (Number(req.params.number1) && Number(req.params.number2))
    res.send(suma.toString())
  else
    res
      .status(400)
      .send('One or both of the parameters given to add is not a number')
})

app.post('/number/:saveNumber', (req, res) => {
  if (Number(req.params.saveNumber)) {
    db.numbers.push(req.params.saveNumber)
    res.send(db.numbers)
  } else res.status(400).send(`${req.params.saveNumber} is not a number`)
})

app.delete('/number/:deleteNumber', (req, res) => {
  if (Number(req.params.deleteNumber)) {
    db.numbers.forEach((number) => {
      if (number === req.params.deleteNumber) {
        db.numbers = db.numbers.filter(
          (newNumbers) => newNumbers !== req.params.deleteNumber
        )
        res.send(db.numbers)
      }
    })
  } else res.send(`Can't delete ${req.params.deleteNumber}`)
})

app.put('/number/:oldNumber/:newNumber', (req, res) => {
  if (Number(req.params.oldNumber)) {
    if (Number(req.params.newNumber)) {
      db.numbers.forEach((numero) => {
        if (numero === req.params.oldNumber) numero = req.params.newNumber
      })
    } else res.status(400).send(`${req.params.newNumber} is not a number`)
  } else res.status(400).send(`${req.params.oldNumber} is not a number`)
})

app.post('/countFields', (req, res) => {
  let respuesta = Object.keys(req.body).length
  res.send(respuesta.toString())
})

app.post('/createUser', (req, res) => {
  let id = Date.now()
  let newEntry = { id, ...req.body }
  userList.users.push(newEntry)
  res.send(newEntry)
})

app.get('/users', (req, res) => {
  let li = `    `
  userList.users.forEach((usuario) => {
    let nombre = usuario.name
    let email = usuario.email
    let lista = `
    <li>Usuario: ${nombre}, Email:${email}</li>
    `
    li += lista
  })
  let ul = `<ul>
  ${li}
  </ul>`
  res.send(ul)
})

app.get('/user/:userId', (req, res) => {
  userList.users.forEach((usuario) => {
    if (usuario.id === +req.params.userId) {
      let h1 = `<h1>${usuario.name}</h1>`
      let p = `<p>${usuario.email}</p>`
      let html = `
      ${h1}
      ${p}
      `
      res.send(html)
    }
  })
})

app.put('/user/:userId', (req, res) => {
  userList.users.forEach((usuario) => {
    if (usuario.id === +req.params.userId) {
      usuario.name = req.body.name
      usuario.email = req.body.email
      res.send(usuario)
    }
  })
})

app.delete('/user/:userId', (req, res) => {
  userList.users.forEach((usuario) => {
    if (usuario.id === +req.params.userId) {
      userList.users = userList.users.filter(
        (usuario) => usuario.id !== +req.params.userId
      )
      res.send(userList.users)
    }
  })
})

app.listen(4002, () => console.log('Server on...'))
