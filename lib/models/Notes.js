const mongoose = require('mongoose'); 
const Entries = require('./Entries'); 



const schema = new mongoose.Schema({
  catagory: {
    type: Text, 
    required: true
  }, 
  entries: [Entries], 
  

}); 

module.exports = mongoose.model('Notes', schema); 
