const express = require('express');
const { check } = require('express-validator');
const propertyController = require('../controllers/propertyController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// @route   GET api/properties
// @access  Public
router.get('/', propertyController.getProperties);

// @route   GET api/properties/:id
// @access  Public
router.get('/:id', propertyController.getPropertyById);

// @route   POST api/properties
// @access  Private
router.post(
  '/',
  auth,
  upload.single('image'),
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('price', 'Price is required').isFloat(),
  ],
  propertyController.createProperty
);

// @route   PUT api/properties/:id
// @access  Private
router.put(
  '/:id',
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('price', 'Price is required').isFloat(),
  ],
  propertyController.updateProperty
);

// @route   DELETE api/properties/:id
// @access  Private
router.delete('/:id', auth, propertyController.deleteProperty);

module.exports = router;
