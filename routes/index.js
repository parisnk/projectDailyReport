var express = require('express');
var router = express.Router();
var reportsCtrl = require('../controllers/reports.Ctrl');
var asyncCtrl = require('../controllers/async.Ctrl');

//creating routes for rendering home page
router.get('/', asyncCtrl.reportData);

//posting daily reports filtered by projects to /projectresult endpoint
router.post('/projectresult', reportsCtrl.dailyReportByProject);

//posting daily reports filtered by reporters to /reporterresult endpoint
router.post('/reporterresult', reportsCtrl.dailyReportByReporter);


// creating route for getting reporters and project names(Received contribution for this function from RicardoGonzalezJ in my GitHub https://github.com/parisnk/projectDailyReport/pull/9)
router.get('/createreport', reportsCtrl.getReportersAndProjects);
//posting newly created daily reports
router.post('/createreport', reportsCtrl.createReport);

//export router
module.exports = router;

