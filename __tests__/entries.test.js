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

    
  });
});
