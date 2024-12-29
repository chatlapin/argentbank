# Installation et lancement du Back-end :

1. Aller dans le dossier "Back"
2. Vérifier la version de Node:
node --version
3. Vérifier la version de MongoDB
mongo --version
4. Installer toutes les dépendances pour le back-end:
npm install ou yarn

5. mongo
1. show dbs
2. show collections
3. use argentBankDB
4. db.users.find()
Example: JSON
    "firstName": "Tony", 
    "lastName": "Stark", 
    "email": "tony@stark.com", 
    "password": "password123" 

    "firstName": "Steve", 
    "lastName": "Rogers", 
    "email": "steve@rogers.com", 
    "password": "password456" 

7. Lancer le back-end (port 3001 par défaut) avec Node 12:
nvm use 12
npm run dev:server
8. Créer deux utilisateurs dans la DB:
npm run populate-db

# nvm installation
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
2. load nvm in a shell:
source $(brew --prefix nvm)/nvm.sh
3. Verify nvm installation:
nvm --version
4. Use Node.js version 12
nvm use 12
5. Check the active Node.js version:
node -v
6. Lancer le back-end (port 3001 par défaut) avec Node 12:
nvm use 12
npm run dev:server
7. Créer deux utilisateurs dans la DB:
npm run populate-db

# Verify MongoDB Server is Running

1. Check MongoDB Service Status:
2. brew services list 
3. brew services start mongodb-community
4. brew services restart mongodb-community

# Identify the Conflicting Process:
1. lsof -i tcp:3001
2. kill 12345

# Installation et lancement du front-end :
1. Aller dans le dossier "Front"
2. Installer toutes les dépendances pour le front-end:
   npm install
3. Lancer le front-end:
   npm start

Le front-end sera lancé à l'URL: http://localhost:3000/

npm install redux
npm install react-redux

#Design

Static HTML and CSS has been created for most of the site and is located in: /designs.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in Back-end /designs/wireframes/edit-user-name.png.

<img width="961" alt="edit-user-name" src="https://github.com/user-attachments/assets/9d17811f-f137-41b1-bc20-0b4379215440" />


And for the API model that you will be proposing for transactitons, the wireframe can be found in  Back-end /designs/wireframes/transactions.png.

<img width="963" alt="transactions" src="https://github.com/user-attachments/assets/c9b250ab-7a36-4943-9ddc-3a5f287b441b" />
