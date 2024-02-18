# TODO APP Backend
This project is aimed at creating a simple sqlite node.js project, just to show how simple it is to create an sqlite database, you doesn't need to create a database server when you'are using sqlite database and you can comibine sqlite with some ORMs like Sequelize, typeORM and others that support sqlite database. 
Att: This project is totally focused on sqlite database implementation and that's why i didn't care about other things like clean code, project patterns, etc.

##  Prerequisites

- Node.js
- npm or Yarn

## Installation

1. Clone the master branch of the repository:
```
git clone https://github.com/RigobertoCaionda/sqlite-project
```

2. Enter the sqlite-project directory:
```
cd sqlite-project
```
3. Install the dependencies: 
```
npm install or yarn install
```

4. Now you can run the server:
```
npm run start
```

If everything went well up to this point, you'll have the server running locally on port 3000

```
http://localhost:3000

```

## Code Example:

This is the database.js file, in this file we configured sequelize and created the connection with database using sqlite database:

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

module.exports = sequelize;


this is the User Model file called Usuario.js:
const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Usuario = sequelize.define("Usuario", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
});

(async () => {
  await sequelize.sync();
})();

module.exports = Usuario;


## Credits
This project was developed by Rigoberto Caionda.

## Contact
If you have any questions or suggestions, please contact via email rigobertocaionda98@gmail.com.
