const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const { validationResult } = require('express-validator');

// @desc      Register user
// @route     POST /api/users/register
// @access    Public
exports.register_User = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }
    // Create user
    user = await User.create({
      name,
      email,
      password,
    });
    res.status(200).json({
      data: user,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @desc      Login User
// @route     POST  /api/auth/login
// @access    Public
exports.login_User = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  // Check if the fields are empty
  if (!email || !password) {
    return res
      .status(400)
      .json({ errors: [{ msg: 'Please Provide Email and Password' }] });
  }

  //Check the User exist or not
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
  }
  const isPassMatch = await user.matchPassword(password);

  if (!isPassMatch) {
    return next(
      res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
    );
  }
  res.status(200).json({
    data: user,
  });
});
