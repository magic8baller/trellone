const db = require('./userQueries')
const app = require('express')()

app.get('/users', db.getAllUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)