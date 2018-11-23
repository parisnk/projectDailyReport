var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reporterSchema = new Schema({reporterName: String});

reporterSchema
    .pre('save', function (next) {
        //capitalize reporter name
        this.reporterName.charAt(0).toLocalUpperCase();
        next();
    });
module.exports = mongoose.model('Reporter', reporterSchema);