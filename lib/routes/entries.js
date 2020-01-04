const { Router } = require('express'); 
const Entry = require('../models/Entries');

// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/notes', (req, res, next) => {
    Entry
      .create(req.body)
      .then(entry => res.send(entry))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Entry
      .find()
      .then(entry => res.send(entry))
      .catch(next);
    
  })
  .get('/:id', (req, res, next) => {
    Entry
      .findbyId(req.params.id)
      .populate('notes')
      .then(entry => res.send(entry))
      .catch(next);
  });
