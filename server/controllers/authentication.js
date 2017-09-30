const User = require('../models/user');

exports.signup = (req, res, next) => {
  // get the information from the request
  const { email, password } = req.body;
  // validation (poor)
  if(!email || !password) {
    return res.status(422).send({ error: 'Email and Password must be provided' });
  }

  // check if user exists
  User.findOne({ email }, (err, existingUser) => {
    if(err) {
      return next(err);
    }
    // if user with this email already exists, return an error
    if(existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }
    // if user doesn't exist, create it
    const user = new User({
      email,
      password
    });
    // save it in the database
    user.save((err) => {
      if(err) {
        return next(err);
      }
      // respond to request indicating the user was created
      res.json({ success: true });
    });

  });
}
