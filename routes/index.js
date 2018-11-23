var express = require('express');
var router = express.Router();
var reportsCtrl = require('../controllers/reports.Ctrl');

//creating routes for rendering home page
router.get('/', function(req, res){
  res.render('index'); 
});
//creating routes for rendering create report page
router.get('/createreport', reportsCtrl.allMembersReports);
//export router
module.exports = router;