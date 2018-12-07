'use strict';

var DailyReport = require('../models/DailyReport.model');
var Reporter = require('../models/Reporter.model');
var Project = require('../models/Project.model');

// Received contribution for this function from RicardoGonzalezJ in my GitHub https://github.com/parisnk/projectDailyReport/pull/9
exports.getReportersAndProjects = function (req, res) {
  
    Reporter
        .find({})
        .sort({ reporterName: 1 })
        .exec(function (err, reporters) {
            // console.log(reporters);
            if (err) {
                console.log('getting error in getting reporters names');
            } else {

              //Find all the projects
              Project
                  .find({})
                  .sort({ projectName: 1 })
                  .exec(function (err, projects) {
                      if (err) {
                          console.log('getting error in getting projects names');
                      } else {
                          res.render('createreport', {
                              title: 'Create Report',
                              reporters: reporters,
                              projects: projects
                          });
                      }
                  });
          }
      });
}
//Filter reports by the reporter
exports.dailyReportByReporter = function (req, res) {
    var query = DailyReport.find({});
    var filter = req.body.memberName;

    if (filter === 0) {
        console.log('No daily reports were found');
    } else {
        query
            .where({ memberName: filter })

            .sort({ createdOn: 'desc' })
            .exec(function (err, results) {
                res.render('reporterresult', { dailyReports: results });
            });
    }

};
//Filter reports by the project name
exports.dailyReportByProject = function (req, res) {
    var query = DailyReport.find({});
    var filter = req.body.projectTitle;

    if (filter === 0) {
        console.log('No daily reports were found');
    } else {
        query
            .where({ projectTitle: filter })
            .sort({ createdOn: 'desc' })
            .exec(function (err, results) {
                res.render('projectresult', { dailyReports: results });
            });
    }
};
exports.createReport = function (req, res) {
    //Creating a new report
    var newReport = new DailyReport();
    newReport.memberName = req.body.memberName;
    newReport.projectTitle = req.body.projectTitle;
    newReport.completedTasks = req.body.completedTasks;
    newReport.tasksInProgress = req.body.tasksInProgress;
    newReport.obstacles = req.body.obstacles;
    newReport.nextTask = req.body.nextTask;

    newReport.save(function (err) {
        if (err) {
            //Validation error is saving daily reports
            var errMessage = 'Sorry there was an error saving' + err;
            res.render('createreport', {
                title: 'Report - create report (error)',
                messageError: errMessage
            });
        } else {
            console.log('new daily report has been saved')
            res.redirect(301, '/');
        }
    });
}