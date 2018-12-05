var express = require('express');
var router = express.Router();
var reportsCtrl = require('../controllers/reports.Ctrl');
var asyncCtrl = require('../controllers/async.Ctrl');

//creating routes for rendering home page
router.get('/', asyncCtrl.reportData);
//creating route for getting reporters and project names
router.get('/createreport', reportsCtrl.getReportersAndProjects);
//creating routes for posting reports
router.post('/createreport', reportsCtrl.createReport);

//export router
module.exports = router;
