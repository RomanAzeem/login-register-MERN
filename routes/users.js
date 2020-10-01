const express = require('express');
//import all the controller from Users Controller

//bring in the express-router params acception
const router = express.Router();

const { register_User, login_User } = require('../controllers/usersController');

//route for registering new user
router.post('/register', register_User);
router.post('/login', login_User);

module.exports = router;
