const Entry = require('./Entries'); 
const mongoose = require('mongoose'); 

describe('our note entries have the things', () => {
  it('contains a string title', () => {
    const entry = new Entry({
      title: 'my first entry', 
      content: 'Hello World', 
      author: 'Aaron', 
      date: new Date()
    });
    expect(entry.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      title: 'my first entry', 
      content: 'Hello World', 
      author: 'Aaron', 
      date: expect.any(Date)
    });
  });
  it('contains a string date', () => {
    const entry = new Entry({
    
      date: new Date()
    });
    expect(entry.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId), 
      date: expect.any(Date)
    });
  });
  it('contains a date', () => {
    const entry = new Entry({
      date: new Date()
    });
    expect(entry.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      date: expect.any(Date)
    }); 
  });
  it('throws an error if there is no title', () => {
    const entry = new Entry({
      content: 'Hello World', 
      author: 'Aaron', 
      date: new Date()
    });
    const { errors } = entry.validateSync(); 

    expect(errors.title.message).toEqual('Path `title` is required.'); 
  });
  it('throws an error if there is no author', () => {
    const entry = new Entry({
      title: 'my first entry',
      date: new Date()
    });
    const { errors } = entry.validateSync(); 

    expect(errors.author.message).toEqual('Path `author` is required.'); 
  });
  it('throws an error if there is no date', () => {
    const entry = new Entry({
      author: 'Aa',
      content: 'Hello',
      title: 'my first entry',
    });
    const { errors } = entry.validateSync(); 
    expect(errors.date.message).toEqual('Path `date` is required.'); 
  });
});
