const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({
  content:{
    type: Text, 
    require: true
  }, 
  title: {
    type: Text, 
    required: true
  }, 
  author: {
    type: Text, 
    required: true, 
  }, 
  date: {
    type: Date, 
    required: true
  }

});

module.exports('Entries', schema); 
