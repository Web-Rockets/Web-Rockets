const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
* Maybe bcrypt?
*/
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // roomId: { };
});

module.exports = mongoose.model('User', userSchema);
