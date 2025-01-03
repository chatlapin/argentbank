# Installation et lancement du Back-end :

1. Aller dans le dossier "cd Back"

Vérifier la version de Node:
node --version

Vérifier la version de MongoDB
mongo --version

2. nstaller toutes les dépendances pour le back-end:
npm install ou yarn

3. npm run dev

Lancer le back-end (port 3001 par défaut) avec Node 12:
nvm use 12
npm run dev:server

Créer deux utilisateurs dans la DB:
npm run populate-db

mongo ou mongosh
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

# Installation et lancement du front-end :
1. Aller dans le dossier "Front"
2. Installer toutes les dépendances pour le front-end:
   npm install
3. Lancer le front-end:
   npm run dev

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

Le front-end sera lancé à l'URL: http://localhost:3000/

npm install redux
npm install react-redux

npm install swagger-ui-react axios

# 6 issues from repo Projet-10-Bank...
1. The Home page now displays all placeholder data from the mockup.
2. Users can log in to the system using JWT tokens for authentication.
3. Users can log out and return to the home page.
4. Users can only see their own profile with their first name and placeholder bank account information.
5. Users can update their profile (first name and last name), which is persisted to the database.
6. State management is done through Redux, with a store, actions, and reducers for handling application state changes.

Make sure to implement the necessary API endpoints on the backend to handle these requests, 
and update the axios calls in the authSlice to use the correct API URLs for the project.

#Design

Static HTML and CSS has been created for most of the site and is located in: /designs.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in Back-end /designs/wireframes/edit-user-name.png.

<img width="961" alt="edit-user-name" src="https://github.com/user-attachments/assets/9d17811f-f137-41b1-bc20-0b4379215440" />


And for the API model that you will be proposing for transactitons, the wireframe can be found in  Back-end /designs/wireframes/transactions.png.

<img width="963" alt="transactions" src="https://github.com/user-attachments/assets/c9b250ab-7a36-4943-9ddc-3a5f287b441b" />
