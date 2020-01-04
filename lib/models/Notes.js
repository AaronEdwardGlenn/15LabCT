const mongoose = require('mongoose'); 

const entrySchema = new mongoose.Schema({
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
  category: {
    type: String, 
    required: true
  }, 
  entry: [entrySchema], 
}); 


module.exports = mongoose.model('Notes', schema); 
