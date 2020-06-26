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

userController.createSession = (req, res, next) => {
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
