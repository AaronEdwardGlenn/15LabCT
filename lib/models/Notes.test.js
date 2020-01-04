const mongoose = require('mongoose');
const Notes = require('./Notes'); 


describe('Notes attributes', () => {
  it('needs to have a category', () => { 
    const note = new Notes({
      category: 'Science', 
      entry: [{
        content: 'this is my note',
        title: 'note 1',
        author: 'aaron',
        date: new Date()
      }]
    }); 
    expect(note.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      category: 'Science',
      entry: [{ 
        content: 'this is my note',
        title: 'note 1',
        author: 'aaron',
        date: expect.any(Date) }]
    });
  });
}); 
