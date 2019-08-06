const express = require('express')
const app = express()
var messageHistM = []
var messageHistU = []
var messageHistD = []
var port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

console.log(new Date().getDate() + "/" + new Date().getMonth() + " " + new Date().getHours() + "." + new Date().getMinutes())

server = app.listen(port)
const io = require("socket.io")(server)

io.on('connection', (socket) => {
  console.log('New user connected')
  var nameset = false
  
  socket.on('change_username', (data) => {
    if (nameset) {
      io.sockets.emit('system_message', {message : "Brugernavn skifte: " + socket.username + " skiftet til " + data.username, date: new Date().getDate() + "/" + new Date().getMonth() + " " + new Date().getHours() + "." + new Date().getMinutes()});
      socket.username = data.username
      console.log("Brugernavn skifte: " + socket.username + " > " + data.username)
    } else {
      nameset = true;
      socket.username = data.username
      io.sockets.emit('system_message', {message : socket.username + " joinede lige chatrummet", date: new Date().getDate() + "/" + new Date().getMonth() + " " + new Date().getHours() + "." + new Date().getMinutes()});
    }
  })

  socket.on('new_message', (data) => {
    console.log(socket.username + ": " + data.message)
    io.sockets.emit('new_message', {message : data.message, username : socket.username, date: new Date().getDate() + "/" + new Date().getMonth() + " " + new Date().getHours() + "." + new Date().getMinutes()});
    messageHistM.push(data.message)
    messageHistU.push(socket.username)
    messageHistD.push(new Date().getDate() + "/" + new Date().getMonth() + " " + new Date().getHours() + "." + new Date().getMinutes())
  })
  
  for (let i = 0; i < messageHistM.length; i++) {
    const mes = messageHistM[i];
    const user = messageHistU[i]
    const date = messageHistD[i]

    socket.emit('new_message', {message : mes, username : user, date: date})
  }
})