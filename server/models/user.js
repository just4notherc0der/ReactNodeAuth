const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// define the model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true // because Mongo thinks SAVA@GMAIL.COM is same as sava@gmail.com
  },
  password: String
});

// before saving the user, run this function
userSchema.pre('save', (next) => {
  // context is user model
  const user = this;
  // generate a salt
  bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      return next(err);
    }
    // encrypt the passord using the salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if(err) {
        return next(err);
      }
      // overwrite the plain text password with encrypted one
      user.password = hash;
      // go and save the model
      next();
    });
  });
});

// create the model class (represents all users)
const ModelClass = mongoose.model('user', userSchema);

// export the model
module.exports = ModelClass;
