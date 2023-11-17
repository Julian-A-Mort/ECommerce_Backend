const express = require('express');
const router = express.Router();
const { tag, product, productTag } = require('../models');

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tags = await tag.findAll({
      include: [{
        model: product,
        through: productTag
      }]
    });
    res.json(tags);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single tag 
router.get('/:id', async (req, res) => {
  try {
    const singleTag = await tag.findByPk(req.params.id, {
      include: [{
        model: product,
        through: productTag
      }]
    });

    if (!singleTag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.json(singleTag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST 
router.post('/', async (req, res) => {
  try {
    const newTag = await tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT 
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await tag.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedTag = await tag.findByPk(req.params.id);
      res.status(200).json(updatedTag);
    } else {
      res.status(404).json({ message: 'Tag not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE 
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await tag.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Tag not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
