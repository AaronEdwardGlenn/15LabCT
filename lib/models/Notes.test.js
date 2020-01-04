const Notes = require('./Notes'); 
const mongoose = require('mongoose');


describe('Notes', () => {
  it('needs to have a category and entry', () => { 
    const note = new Notes({
      category: 'Science', 
      entry: 'Science is cool'
    }); 
    expect(note.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      category: 'Science',
      entry: 'Science is cool'
    });
  });
}); 
