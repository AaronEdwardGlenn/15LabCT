const mongoose = require('mongoose'); 

const entriesSchema = new mongoose.Schema({
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


const schema = new mongoose.Schema({
  catagory: {
    type: String, 
    required: true
  }, 
  entries: [entriesSchema]
}); 

module.exports = mongoose.model('Notes', schema); 
