const Canvas = require('../models/canvasModel');

const canvasController = {};

canvasController.getUserId = (req, res, next) => {
  const roomId;
  Canvas.find({ roomId }, 'roomId')
    .then((found) => {
      console.log('the unique autogen user id found is ', found);
      res.locals.roomId = found;
      return next();
    })
    .catch((err) => {
      console.log('error at canvasController.getUserId!');
      next(err);
    });
};

// need a controller that writes to that Session associated with the found roomId


module.exports = canvasController;
