const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  notesId: {
    type: mongoose.Types.ObjectId, 
    ref: 'Notes',
    required: true
  },
  content:{
    type: String, 
    required: true
  }, 
  title: {
    type: String, 
    required: true
  }, 
  author: {
    type: String, 
    required: true, 
  }, 
  date: {
    type: Date, 
    required: true
  }

});

module.exports = mongoose.model('Entries', schema); 
