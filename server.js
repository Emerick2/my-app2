var express = require('express');
var path = require('path');
var app = express();

app.use(express.urlencoded({ extended: true })); // Permet de lire les données POST
app.use(express.static('src')); // Pour les fichiers CSS/JS

app.get('/accueil', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'accueil.html'));
});

app.get('/', function (req, res) {
  res.redirect('/accueil');
});

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Serveur lancé sur le port ' + server.address().port);
});

//------



// Traitement du formulaire
app.post('/submit-form', function (req, res) {
  // Les données se trouvent dans req.body
  var nom = req.body.user_name;
  var message = req.body.user_message;
  
  console.log("Nom reçu : " + nom);
  console.log("Message reçu : " + message);

  res.send(`Merci ${nom}, votre message a bien été reçu !`);
});

app.listen(3000, () => console.log('Serveur actif sur le port 3000'));