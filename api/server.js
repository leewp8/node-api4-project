const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('hello world')
})

server.get('/api/users', (req,res) => {
    res.json({ message: 'api is working'})
})


module.exports = server;