const express = require('express');
const app = express();
require('dotenv').config();

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

// server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});