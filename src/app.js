const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const hendleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
    .then(() => console.log('Authenticate complete'))
    .catch(error => console.log(error)) 
    
db.sync({ force: true })
    .then(() => console.log('Synchronized database'))
    .catch(error => console.log(error));

app.get('/', (req, res) => {
    console.log('Bienvenido al server');
});

app.use(hendleError);

module.exports = app;

//npm i express sequelize pg pg-hstore dotenv jsonwebtoken bcrypt cors

//npm i nodemon morgan -D

