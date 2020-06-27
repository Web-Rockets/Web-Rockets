const User = require('../models/userModel');

const userController = {};

userController.getUserId = (req, res, next) => {
  const { username } = req.body;
  User.find({ username }, '_id')
    .then((found) => {
      console.log('the unique autogen user id found is ', found);
      res.locals.userId = found;
      return next();
    })
    .catch((err) => {
      console.log('error at userController.getUserId!');
      next(err);
    });
};

// get all users 
userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log('Err at get users:', err);
      return res.status(500).send(err);
    }
    res.locals.users = users;
    return next(); 
  })
}

// create user and save user to DB
userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  User.create({ username, password }, (err, data) => {
    if (err) {
      console.log('Error at create user:', err);
      // say it's a duplicate user for now
      return res.status(500).send('Username has been taken!');
    }
    // Handle duplicate username 
    // if data is falsy 
    console.log('data from createUser:', data);
    return res.status(200).send('User has been created!')
  })
}

// verify user and log in
userController.verifyUser = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  User.findOne({ username, password }, (err, data) => {
    if (err) {
      console.log('Error at verify user:', err);
      return res.status(500).send('Username or password is invalid!');
    }
    if (!data) {
      return res.status(500).send('Username or password is invalid!');
    }
    res.status(200).json({ logStatus: true });
  })
}

userController.createCanvas = (req, res, next) => {
  const { userId } = res.locals;
  // const userId = res.locals.userId;  // equivalent to above
  let canvasData = {};
  console.log('userId is ', userId);
  User.create({ roomId: userId, canvas: canvasData }) // <- insert canvas data somehow?
    .then((data) => {
      console.log('A canvas Session created in database');
      next();
    })
    .catch((err) => {
      console.log('error happening in userController.createSession!');
      next(err);
    });
};

module.exports = userController;
