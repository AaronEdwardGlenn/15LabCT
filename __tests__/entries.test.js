require('dotenv').config(); 

const request = require('supertest'); 
const app = require('../lib/app'); 
const connect = require('../lib/utils/connect'); 
const mongoose = require('mongoose'); 
const Notes = require('../lib/models/Notes'); 
const User = require('../lib/models/User'); 

describe('notes routes', () => {
  let access;
  beforeAll(async() => {
    connect(); 
    access = request.agent(app);
    
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
  });
  
  beforeEach(() => {
    return mongoose.connection.dropDatabase(); 
  }); 

  afterAll(() => {
    return mongoose.connection.close(); 
  });
  
  let note; 
  beforeEach(async() => {
    note = await Notes.create({
      category: 'science', 
      entry: 'science is hella cool'
    });
  });

  console.log(note);
  

  it('can create a new note when logged in', async() => {
    return access
      .post('/api/v1/notes')
      .send({
        category: 'Math',
        entry: 'is number 1'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          category: 'Math',
          entry: 'is number 1',
          __v: 0
        });
      });
  });

  it('requires auth', () => {
    return request(app)
      .get('/api/v1/note')
      .then(res => {
        expect(res.statusCode).toEqual(500); 
      });
  });

  it('can get all user notes', () => {
    return request(app)
      .get(`/api/v1/notes/${note.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          category: 'Math',
          entry: 'me plus you is two',
          __v: 0
        });
      });
  });
});
