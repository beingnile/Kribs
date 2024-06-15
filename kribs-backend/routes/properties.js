const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { check, validationResult } = require('express-validator');
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
router.post('/', [
  auth,
  role('owner'),
  check('title', 'Title is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
  check('price', 'Price is required').isNumeric()
], createProperty);

// @route PUT api/properties/:id
router.put('/:id', [
  auth,
  role('owner'),
  check('title', 'Title is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
  check('price', 'Price is required').isNumeric()
], updateProperty);

// @route DELETE api/properties/:id
router.delete('/:id', auth, deleteProperty);

module.exports = router;
