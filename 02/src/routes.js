const express = require('express');
const { allGuests, findGuest, addGuest, deleteGuest } = require('./controllers/organizingGuests');
const routes = express();

routes.get('/guests/names', allGuests);
routes.get('/guests',findGuest);
routes.post('/guests', addGuest);
routes.delete('/guests', deleteGuest);

module.exports = {routes};