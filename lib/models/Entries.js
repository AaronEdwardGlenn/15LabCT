const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({
  content:{
    type: String, 
    require: true
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
