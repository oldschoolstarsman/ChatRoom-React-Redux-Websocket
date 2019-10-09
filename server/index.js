/*
 * Require
 */
const express = require('express');
const bodyParser = require('body-parser');
const join = require('path').join;
const Server = require('http').Server;
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);


/*
 * Express
 */
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


/*
 * Theme json
 */
app.get('/theme/:email', (req, res) => {
  const themes = {
    'bouclierman@herocorp.io': {
      backgroundColor: '#a987fb',
      fontSize: '1.2em',
    },
    'acidman@herocorp.io': {
      backgroundColor: '#87fb90',
      fontSize: '1.6em',
    },
    'captain.sportsextremes@herocorp.io': {
      backgroundColor: '#fbe287',
      fontSize: '1.3em',
    },
  };
  if (req.params.email in themes) {
    res.json(themes[req.params.email]);
  }
  else {
    res.status(400).send();
  }
});

/*
 * Socket.io
 */
let id = 0;
io.on('connection', (socket) => {
  console.log('>> socket.io - connected');
  socket.on('send_message', (message) => {
    message.id = ++id;
    io.emit('send_message', message);
  });
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'bouclierman@herocorp.io' && password === 'jennifer') {
    res.send('John');
  }
  else if (email === 'acidman@herocorp.io' && password === 'fructis') {
    res.send('Burt');
  }
  else if (email === 'captain.sportsextremes@herocorp.io' && password === 'pingpong') {
    res.send('Karin');
  }
  else {
    res.status(400).send();
  }
});

/*
 * Server
 */
server.listen(3001, () => {
  console.log('listening on *:3001');
});
