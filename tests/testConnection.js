require('dotenv').config();

const Sequelize = require('sequelize');
const config = require('./config/config'); // Adjust the path to your actual config file

const sequelize = new Sequelize(config.development);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
