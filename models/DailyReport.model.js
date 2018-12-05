var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
    function (val) {
        return (val.length > 0 && val != '(Choose your name)');
    },
    //error message for the reporter name
    'Select a valid reporter name.'
];

var projectNameValidator = [
    function (val) {
        return (val.length > 0 && val != '(Choose your project)');
    },
    //error message for the project name
    'Select a valid project name.'
];
var dailyReportSchema = new Schema({
    memberName: {
        type: String,
        validate : memberNameValidator,
        required: true
    },
    projectTitle: {
        type: String,
        validate: projectNameValidator,
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
    nextTask : {
        type: String,
        default: 'none'
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DailyReport', dailyReportSchema);