const Router = require(router); 
const Entry = require('../models/Entries');

module.exports = Router()
  .post('/entry', (req, res, next) => {
    Entry
      .create(req.body)
      .then(entry => res.send(entry))
      .catch(next);
  });
