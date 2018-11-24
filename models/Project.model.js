var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({ projectName: String });


module.exports = mongoose.model('Project', projectSchema);