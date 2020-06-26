const mongoose = require('mongoose');

const { Schema } = mongoose;


const canvasSchema = new Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId },
  canvas: { type: Object },
  
});

module.exports = mongoose.model('Canvas', canvasSchema);
