# Documentation messagerie

> Dans le fichier server.js situé dans le dossier serveur, vous aurez la configuration du serveur.
> Vous pouvez aussi y retrouver le code du chat avec les détails de chaque étapes à effectuer.
> 
> La documentation se trouve directement dans les commentaires du code.

## Le server

> $ Configuré sur le port 3000 : http://localhost:3000/

**Pour lancer le serveur :** 
>npm start

**Pour tester le serveur :**
>Utiliser Postman

> Avec une méthode POST, rentrer cette URL : http://localhost:3000/api/messages

> Rentrer les données JSON suivante dans la partie Body > raw
````json
{
  "sender": "John",
  "recipient": "Alice",
  "content": "Hello, Alice! How are you?"
}
````
> Si vous avez un Status : 200 Ok, le message est bien reçu, le programme fonctionne

> A VOUS DE L'ADAPTER MAINTENANT