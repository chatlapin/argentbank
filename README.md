Installation et lancement du Back-end :
Aller dans le dossier "Back"

Vérifier la version de Node:

node --version
Vérifier la version de MongoDB
mongo --version
Installer toutes les dépendances pour le back-end:
npm install ou yarn
Lancer le back-end (port 3001 par défaut) avec Node 12:
nvm use 12

npm run dev:server

Créer deux utilisateurs dans la DB:
npm run populate-db
Utilisateurs en base de données:
Tony Stark
First Name: Tony
Last Name: Stark
Email: tony@stark.com
Password: password123
Steve Rogers
First Name: Steve,
Last Name: Rogers,
Email: steve@rogers.com,
Password: password456
API Documentation
Pour en apprendre plus sur le fonctionnement de l'API, une fois l'environnement local lancé, visitez: http://localhost:3001/api-docs

Installation et lancement du front-end :
Aller dans le dossier "Front"

Installer toutes les dépendances pour le front-end:

npm install
Lancer le front-end:
npm start
Le front-end sera lancé à l'URL: http://localhost:3000/
