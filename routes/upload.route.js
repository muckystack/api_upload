/**
 * auth.route
 *
 * Author: Miguel Ángel Martínez Puga
 * Date: 04/02/2020
 * Version: 1.0
 */




const express = require('express');
const UploadController = require('../controllers/upload.controller');
const _uploadController = new UploadController();

var multipart = require('connect-multiparty');
var md_umploads = multipart({ uploadDir: './uploads' });


const api = express.Router();

// Definir cada unas de las rutas
api.post('/', [md_umploads], _uploadController.upload);
api.get('/:image', _uploadController.Image);

module.exports = api;