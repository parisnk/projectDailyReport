var express = require('express');
var router = express.Router();
var reportsCtrl = require('../controllers/reports.Ctrl');

//creating routes for rendering home page
router.get('/', function(req, res){
  res.render('index');
});
// creating routes for rendering createreport page and data for reporters and
// projects drop-downs
// router.get('/createreport', reportsCtrl.allMembersReports, reportsCtrl.allProjects);
router.get('/createreport', reportsCtrl.allMembersReportsAndProjects);
//export router
module.exports = router;
