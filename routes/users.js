const express = require('express');
const { check, validationResult } = require('express-validator');

//bring in the express-router params acception
const router = express.Router();

const { register_User, login_User } = require('../controllers/usersController');

//route for registering new user
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  register_User
);
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  login_User
);

module.exports = router;
