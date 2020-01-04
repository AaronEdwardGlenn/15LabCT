const { Router } = require('express'); 
const User = require('../models/User.js'); 
const isAuthorized = require('../middleware/ensure-auth');

const initializeCookie = (res, token) => {
  res.cookie('session', token, {
    maxAge: 24 * 60 * 60 * 1000
  });
};

module.exports = Router()
  .post('/signup', (req, res, next) => {
    User
      .create(req.body)
      .then(user => {
        initializeCookie(res, user.authToken());
        res.send(user); 
      })
      .catch(next); 
  })

  .post('/login', (req, res, next) => {
    User 
      .authorize(req.body)
      .then(user => {
        initializeCookie(res, user.authToken());
        res.send(user); 
      })
      .catch(next); 
  })
  .get('/verify', isAuthorized, (req, res) => {    
    res.send(req.user);
  });
