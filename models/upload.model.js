/**
 * user.model
 *
 * Author: Miguel Ángel Martínez Puga
 * Date: 04/02/2020
 * Version: 1.0
 */



var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UploadSchema = Schema({
    imageUrl: String
});

module.exports = mongoose.model('Upload', UploadSchema);