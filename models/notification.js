const mongoose = require('mongoose');
const notificationSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User', 
        required: true
    },
    content: {
        type : String,
    }


  },{
      timestamps:true,
  });

  const Notification = mongoose.model('Notification',notificationSchema);
  module.exports = Notification; 