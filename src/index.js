const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE HTML>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Page d'accueil</title>
        </head>
        <body>
            <h1>Bienvenue</h1>
            <p>Ceci est ma page servie par Express.</p>
        </body>
        </html>`);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

// Pour définir des variables d'environnement sur Scalingo, vous pouvez utiliser la commande :
// scalingo env-set MA_VARIABLE=ma_valeur
