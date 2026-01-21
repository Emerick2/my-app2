var express = require('express');
var path = require('path');
var app = express();

app.use(express.urlencoded({ extended: true })); // POST
app.use(express.static('static')); // CSS/JS

app.get('/accueil', function(req, res) {
  res.sendFile(path.join(__dirname, 'static/src', 'accueil.html'));
});

app.get('/', function (req, res) {
  res.redirect('/accueil');
});

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Serveur lancé sur le port ' + server.address().port);
});

//------

// app.post('/name-form', function (req, res) {
//   var fisrtName = req.body.user_fistName;
//   var lastName = req.body.user_lastName;
  
//   // res.send(`Bonjour ${fisrtName} ${lastName} !`);
//   document.getElementById("reponse").textContent = `Bonjour ${fisrtName} ${lastName} !`;
// });

document.getElementById('name-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const formData = new URLSearchParams(new FormData(this));

    // On envoie les données au serveur sans changer de page
    fetch('/name-form', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // On récupère la réponse du serveur
    .then(data => {
        // On AJOUTE la réponse dans la div sans supprimer le reste
        document.getElementById('reponse').innerHTML += `<p>${data}</p>`;
    });
});

app.listen(3000, () => console.log('Serveur actif sur le port 3000'));