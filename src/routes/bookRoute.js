const express = require('express');
const app = express.Router();
const bookController = require('../controllers/bookController');
const auth = require("../middleware/auth");

app.post("/",auth, bookController.addBook);
app.get("/",auth, bookController.getBooks);

app.delete("/:id",auth, bookController.deleteBook);



module.exports = app;

