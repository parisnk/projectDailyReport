var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
    function (val) {
        return (val.length > 0 && val != '(Choose your name)');
    },
    //custom error message
    'Select a valid member name.'
];
var dailyReportSchema = new Schema({
    memberName: {
        type: String,
        validate : memberNameValidator
    },
    projectTitle: {
        type: String,
        required: true
    },
    completedTasks: {
        type: String,
        required: true
    },
    tasksInProgress: {
        type: String,
        required: true
    },
    obstacles: {
        type: String,
        default: 'none'
    },
    estimatedProjectedDate: {
        type: Date,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DailyReport', dailyReportSchema);