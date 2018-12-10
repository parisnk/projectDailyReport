// Setup express, bodyParser, mongoose and path
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

// port that the application is going to start
var port = 8080;
//Retrieve
var db = 'mongodb://localhost/projectDailyReport';

//routes
var routes = require('./routes/index');

//connect to mLab in Horoku otherwise connect yo MongoDB locally
mongoose.connect(process.env.MONGODB_URI || db, {useNewUrlParser: true});

//  This is where all the magic happens! using Swig template for displaying views 
var swig = require('swig');
//Use .html extension for our views folder
app.engine('html', swig.renderFile);

//Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//Set directory to contain stylesheets
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);
//use port 8080 unless there exists a pre-configured port
app.listen(process.env.PORT || port, function () {
        console.log('Application Started on port ', (process.env.PORT || port));
    });