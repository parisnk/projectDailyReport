var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reporterSchema = new Schema({reporterName: String});


module.exports = mongoose.model('Reporter', reporterSchema);