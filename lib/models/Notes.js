const user = require('./User'); 
const mongoose = require('mongoose'); 


const schema = new mongoose.schema({
  notesArray: {
    type: Array, 
    required: true
  }, 

}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.passwordHash; 
    }   
  }
}); 

module.exports = ('notes', Schema); 
