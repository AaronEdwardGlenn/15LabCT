const Notes = require('./Notes'); 
const mongoose = require('mongoose');


describe('Notes', () => {
  it('needs to have a category and entry', () => { 
    const note = new Notes({
      categoy: 'Science', 
      entry: expect.any(Array)
    }); 
    expect(note.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      categoy: 'Science',
      entry: expect.any(Array)
    });
  });
}); 
