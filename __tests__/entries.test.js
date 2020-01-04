require('dotenv').config(); 

const request = require('supertest'); 
const app = require('../lib/app'); 
const connect = require('../lib/utils/connect'); 
const mongoose = require('mongoose'); 
const Notes = require('../lib/models/Notes'); 
const User = require('../lib/models/User'); 

describe('notes routes', () => {

  beforeAll(async() => {
    connect(); 
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase(); 
  }); 

  
  let note; 
  beforeEach(async() => {
    note = await Notes.create({
      category: 'science', 
      entry: 'science is hella cool'
    });
  });
    
  afterAll(() => {
    return mongoose.connection.close(); 
  }); 

  it('can create a new note when logged in', async() => {
    let access = request.agent(app); 

    await User
      .create({
        email: 'calvin@coolidge.com', 
        password: 'president'
      });
    
    await access 
      .post('/api/v1/auth/login')
      .send({
        email: 'calvin@coolidge.com', 
        password: 'president'
      });

    return access
      .post('/api/v1/notes')
      .send({
        category: 'Math',
        entry: 'is number 1'
      });
  });

});
