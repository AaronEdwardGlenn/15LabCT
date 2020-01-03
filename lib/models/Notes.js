const mongoose = require('mongoose'); 


const schema = new mongoose.Schema({
  userId: {
    ref: 'User', 
    type: mongoose.Types.ObjectId, 
    required: true
  },
  catagory: {
    type: String, 
    required: true
  }, 
}); 

schema.virtual('entries', {
  ref: 'Entries', 
  localField: '_id', 
  foreignField: 'notesId'
}); 

module.exports = mongoose.model('Notes', schema); 
