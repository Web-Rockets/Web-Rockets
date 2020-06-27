const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
* Maybe bcrypt?
*/
const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // roomId: { };
});

// hashing
// userSchema.pre('save', (next) => {
//   bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
//     this.password = hash;
//     next();
//   })
// })

module.exports = mongoose.model('User', userSchema);
