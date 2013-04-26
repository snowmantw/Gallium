var ejs = require('ejs')
var express = require('express')
var app = express()
var http = require('http')
var server = http.createServer(app)

app.configure(function()
{
    app.set('views', __dirname+'/../template');
    app.set("view options",{layout:false});
    app.use('/library',express.static( __dirname + '/../../library'));
    app.use('/build',express.static( __dirname + '/../../build'));
    app.use('/media',express.static( __dirname + '/media'));
    app.use(express.methodOverride());
    app.use(express.bodyParser());
});

app.get('/', function(req,res){
    res.render('index.ejs')
});

server.listen(3000);
