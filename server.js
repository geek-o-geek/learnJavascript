// Serving static pages

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var messages = []
app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/messages', (req, res)=>{
    res.send(messages);
});

app.post('/messages', (req, res)=>{
    messages.push(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);
})

io.on('connection', (socket)=>{
    console.log('a user connected');
})

var server = http.listen(3000, ()=>{
    console.log("server is listening at port", server.address().port);
});