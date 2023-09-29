const express = require('express');
const { allBooks, findBook, addBook, changeBook, patchBook, removeBook } = require('./controllers/books');
const routes = express();

routes.get('/books', allBooks);
routes.get('/books/:id', findBook);
routes.post('/books', addBook);
routes.put('/books/:id', changeBook);
routes.patch('/books/:id', patchBook);
routes.delete('/books/:id', removeBook);
module.exports = {routes};