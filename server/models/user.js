const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true // because Mongo thinks SAVA@GMAIL.COM is same as sava@gmail.com
  },
  password: String
});

// create the model class (represents all users)
const ModelClass = mongoose.model('user', userSchema);

// export the model
module.exports = ModelClass;
