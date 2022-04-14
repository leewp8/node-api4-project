const express = require('express')
const cors = require('cors')

const User = require('./user-model')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('hello world')
})

server.get('/api/users', (req,res) => {
    User.findAll()
        .then(users => {
            res.json(users)
        })
})

server.post('/api/register', (req,res) => {
    let user = req.body;
    User.create(user)
        .then(user => {
            res.json(user)
        })
})

server.post('/api/login', async (req,res) => {
    let user = await req.body;
    if(!user.username || !user.password) {
        
        res.status(404).json({ message: "user doesn't exist"})
    } else {
        res.json({ message: 'Welcome!'})
    }
})


module.exports = server;