const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty
} = require('../controllers/propertyController');

// @route GET api/properties
router.get('/', getProperties);

// @route GET api/properties/:id
router.get('/:id', getPropertyById);

// @route POST api/properties
router.post('/', auth, createProperty);

// @route PUT api/properties/:id
router.put('/:id', auth, updateProperty);

// @route DELETE api/properties/:id
router.delete('/:id', auth, deleteProperty);

module.exports = router;
