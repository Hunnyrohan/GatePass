const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/database');

async function testLockout() {
  await connectDB();
  const user = await User.findOne({ email: 'admin@gmail.com' });
  if (user) {
    console.log('Current attempts:', user.loginAttempts);
    console.log('Current lockUntil:', user.lockUntil);
    await user.incLoginAttempts();
    const updatedUser = await User.findOne({ email: 'admin@gmail.com' });
    console.log('New attempts:', updatedUser.loginAttempts);
    console.log('New lockUntil:', updatedUser.lockUntil);
  }
  process.exit();
}
testLockout();
