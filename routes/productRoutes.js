const express = require('express');
const router = express.Router();
const { Product, Category, Tag, ProductTag } = require('../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category, {
        model: Tag,
        through: ProductTag
      }]
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [Category, {
        model: Tag,
        through: ProductTag
      }]
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST 
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE 
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
