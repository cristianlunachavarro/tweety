const express = require('express');
const chalk  =  require('chalk')
const logger = require('morgan') // donde usarlo
const app = express();
var bodyParser = require('body-parser'); 


      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use( function loginMiddleware (req, res, next){
        console.log(chalk.blue(req.method + req.url)) 
        next();
    }); 
      app.use('/special/', function loginMiddlewareChain (req,res, next){
        console.log(chalk.red('llegaste a un área especial')) 
        next(); 
    });

//  Duda sobre /special/...
// Duda Morgan..
    
    app.get('/', function (req, res){
        res.send("Hola!"); })
   
    app.get('/special/', function (req, res){
            res.send("Hola! Special website"); })    
   
        
    
    var port = 3000;

    app.listen(port, function (){
        console.log("Hola estas en puerto:  "+ port);
    });