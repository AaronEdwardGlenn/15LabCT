const User = require('./User'); 
const mongoose = require('mongoose'); 
const Entries = require('./Entries'); 



const schema = new mongoose.schema({
  notesArray: {
    type: Array, 
    required: true
  }, 
  entries: [Entries]

}); 

module.exports = ('notes', Schema); 
