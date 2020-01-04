const Router = require('express'); 
const Entry = require('../models/Notes');
const isAuthorized = require('../middleware/ensure-auth');

// eslint-disable-next-line new-cap
module.exports = Router()

  .post('/notes', isAuthorized, (req, res, next) => {
    Entry
      .create(req.body)
      .then(entry => res.send(entry))
      .catch(next);
  })

  .get('/', isAuthorized, (req, res, next) => {
    Entry
      .find({ userId: req.user._id })
      .then(entries => res.send(entries))
      .catch(next);
    
  })

  .get('/:id', (req, res, next) => {
    Entry
      .findbyId(req.params.id)
      .then(entry => res.send(entry))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Entry
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .catch(next);
  })
  .delete('/:id', isAuthorized, (req, res, next) => {
    Entry
      .findByIdAndDelete(req.params.id)
      .then(entry => res.send(entry))
      .catch(next);
  });
