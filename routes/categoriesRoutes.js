const express = require('express');
const router = express.Router();
const { category, product } = require('../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await category.findAll({
      include: [{ model: product }]
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET by ID
router.get('/:id', async (req, res) => {
  try {
    const singleCategory = await category.findByPk(req.params.id, {
      include: [{ model: product }]
    });

    if (!singleCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json(singleCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST 
router.post('/', async (req, res) => {
  try {
    const newCategory = await category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await category.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedCategory = await category.findByPk(req.params.id);
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await category.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
