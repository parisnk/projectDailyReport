'use strict';

var DailyReport = require('../models/DailyReport.model');
var Reporter = require('../models/Reporter.model');
var Project = require('../models/Project.model');
var async = require('async');
exports.reportData = function (req, res) {
    //Gathering all the daily reports, reporters and projects using async
    async.parallel([
        function (cb) {
            var query = DailyReport.find({});
            query.sort({
                createdOn: 'desc'
            })
                .limit(10)
                .exec(function (err, dailyReports) {
                    cb(err, dailyReports)
                })
        },
        function (cb) {
            var query = Reporter.find({});
            query.sort(
                {
                    reporterName: 1
                })
                .exec(function (err, reporters) {
                    cb(err, reporters)
                })
        },
        function (cb) {
            var query = Project.find({});
            query.sort(
                {
                    projectName: 1
                })
                .exec(function (err, projects) {
                    cb(err, projects)
                })
        }
    ],
        function (err, results) {
            if (err) {
                console.log(err);
            } else {
                res.render('index', {
                    dailyReports: results[0],
                    reporters: results[1],
                    projects: results[2]
                });
            }
        });
};