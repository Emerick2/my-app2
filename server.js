// Node.js - Express sample application

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE HTML>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Page d'accueil</title>
        </head>
        <body>
            <h1>Bienvenue</h1>
            <p>Ceci est ma page servie par Express.</p>
        </body>
        </html>`)
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at https://%s:%s', host, port)
})