const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

const router = express.Router();

// @route   GET api/users
// @access  Private/Admin
router.get('/', auth, userController.getUsers);

// @route   GET api/users/:id
// @access  Private/Admin
router.get('/:id', auth, userController.getUserById);

module.exports = router;
