// // Node.js - Express sample application

// var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
//   res.send(`Bonjour, comment ça vas ?!`)
// })

// var server = app.listen(process.env.PORT || 3000, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log('App listening at https://%s:%s', host, port)
// })

var express = require('express');
var path = require('path');
var app = express();

app.get('/accueil', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'accueil.html'));
});

app.get('/', function (req, res) {
  res.redirect('/accueil');
});

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Serveur lancé sur le port ' + server.address().port);
});