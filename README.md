# Quiz Manager

The following README is written in the recommended order for setting up your project. 

This application uses a [Handlebars] [Express] templating package.

# Getting Started
In a location of your choice, in a `bash`, `zsh` or `powershell `Terminal:

`git clone https://github.com/Looease/bcs-quiz-manager.git`

Assuming you have Node.js and NPM installed, in that location, in Terminal:

`npm install`

  This will add predefined package dependencies.

# Ports
* The app is set to run on localhost 3000
* The database is set to run on localhost 5432

# Dotenv file 
Create a `.env`  file in the root of the project directory

# Environmental Variables

Database:
- USER =[postgres user]
- PASSWORD=[postgres password - optional]
  
Security:
- AUTH_SECRET=[AUTH secret for login security]

# Database Setup
Assuming you have Postgres installed, in Terminal:

`psql postgres`

Once Postgres is running, in Terminal:

`CREATE DATABASE [quizmanagerdb or db name of your choice];`

To connect to the database: 
`\c quizmanagerdb;`

# Create base quiz data 

You can now `INSERT` the SQL found in the `models` folder by copying and pasting the content of the scripts into the Postgress terminal. The database is structured with foreign keys, therefore the scripts need to be inserted in the following order: 

- `quizzes`
- `questions`
- `answers`

# Create base users table

It's time to add some users. 

Run the `Create table` script in `users.sql`

`users`

Exit the database with `\q`

Use migration script below to add users.

# Migration Script

In a `bash` or `zsh` terminal,  `cd` (change directory) to `../migrations`

Run 
- `node addUser.js` 
  
This creates admin, view and restricted users with encrypted passwords. 

# Running the application

To run the application enter the following into the terminal 

`npm start`

The appication uses `nodemon` which lets you run, watch, and edit the application without needing to re-start. 