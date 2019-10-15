const express = require('express');
const multer = require('multer');
const PatrimonioController = require('./controllers/PatrimonioController');

const routes = new express.Router();
const upload = multer();

routes.post('/patrimonio/:tipo', upload.none(), PatrimonioController.save);

module.exports = routes;
