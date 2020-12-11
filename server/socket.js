let io = global.io;

let onlineUsers = 0;
global.users = onlineUsers;

function updatePlayers() {
    io.emit('update-players', global.users)
}

io.on('connection', socket => {
    console.log('socket id ' + socket.id + ' connected')
    
    global.users++;
    updatePlayers();

    socket.on('message', msg => {
        io.emit('message', msg);

        require('./data').appendMessage(msg)
    })

    socket.on('X-connect', alias => {
        console.log(alias)
        io.emit('X-connect', alias);
    })

    socket.on('disconnect', () => {
        global.users--;
        updatePlayers();
    })
})

setInterval(updatePlayers, 10e3)