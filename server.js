const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./models');

// middleware
app.use(express.json());

// import routes 
const categoriesRoutes = require('./routes/categoriesRoutes');
const productRoutes = require('./routes/productRoutes');
const tagRoutes = require('./routes/tagRoutes');

// use route modules
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tags', tagRoutes);

// Sync Sequelize and server listener
db.sequelize.sync({ force: false })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to sync database:', error);
  });