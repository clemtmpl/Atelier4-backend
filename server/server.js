const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// Définissez vos routes ici

// Exemple d'une route pour récupérer tous les utilisateurs
app.get('/api/users', (req, res) => {
    // Votre logique pour récupérer tous les utilisateurs
    // Exemple avec des utilisateurs statiques
    const users = [
        {id: 1, name: 'User 1'},
        {id: 2, name: 'User 2'},
        {id: 3, name: 'User 3'}
    ];

    res.json(users);
});

// Exemple d'une route pour envoyer un message
app.post('/api/messages', (req, res) => {
    // Récupérez les données du message depuis req.body
    const {sender, recipient, content} = req.body;

    // Votre logique pour enregistrer le message dans la base de données
    const message = {
        sender,
        recipient,
        content,
        timestamp: new Date()
    };

    // Ici, vous pouvez utiliser une bibliothèque ou un ORM pour interagir avec votre base de données
    // Dans cet exemple, nous simulons simplement une base de données fictive avec un tableau de messages
    db.messages.push(message);

    // Répondez avec une confirmation ou d'autres données si nécessaire
    res.json({success: true, message: 'Message sent'});
});

// Démarrer le serveur
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

