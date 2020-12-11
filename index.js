const express = require('express');
const app = express();
let http = require('http').createServer(app);
const io = require('socket.io')(http);

const data = require('./server/data');

global.io = io;

app.use(express.static('public'))

app.get('/existing/players', (req, res) => {
    res.send(global.users.toString())
})

app.get('/existing/messages', (req, res) => {
    res.send(data.getMessages())
})



http.listen(777, () => {
    console.log('express app listening @ http://localhost:777')
})

require('./server/socket')