const express = require('express'); 
const app = express(); 


app.use(express.json()); 


app.use('/api/v1/auth', require('./routes/auth.js')); 

app.use('/api/v1/notes', require('./routes/entries.js')); 

app.use(require('./middleware/not-found')); 

app.use(require('./middleware/error')); 

module.exports = app; 
