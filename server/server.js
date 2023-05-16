const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

// Ici, c'est une pré-configuration pour récupérer les futurs utilisateurs
app.get('/api/users', (req, res) => {

    // J'ai mis en place des données statiques pour tester l'application, vous pouvez les supprimer
    const users = [
        {id: 1, name: 'User 1'},
        {id: 2, name: 'User 2'},
        {id: 3, name: 'User 3'}
    ];

    res.json(users);
});


// J'ai créé cette constance afin d'établir une simulation d'envoie de message étant donné qu'on est connecté à aucune db
const db = {
    messages: []
};

// Ca c'est ma route pour envoyer un message
app.post('/api/messages', (req, res) => {
    const {sender, recipient, content} = req.body;

    // Cette constante permet de récupérer les futurs infos du message.
    const message = {
        sender, //Celui qui envoie
        recipient, // Celui qui reçoit
        content, // Le contenu
        timestamp: new Date()
    };

    // Ici, vous pouvez utiliser un ORM pour interagir avec la bdd
    // Nous simulons simplement une base de données avec un tableau de messages
    db.messages.push(message);

    // Répondez avec une confirmation ou d'autres données si nécessaire
    res.json({success: true, message: 'Message envoyé'});
});

// Démarrer le serveur
const port = 3000; // Le serveur est défini sur le port 3000 mais à vous de choisir

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

