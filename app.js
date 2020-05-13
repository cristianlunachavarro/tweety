const express = require('express');
const chalk  =  require('chalk')
const morgan = require('morgan') // donde usarlo
const nunjucks  = require('nunjucks')
const tweetBanks = require('./tweetBanks')
const app = express();
var bodyParser = require('body-parser');
const routes = require('./routes');
app.use(express.static('public'))

      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(morgan('tiny'))

      app.set('view engine', 'html'); // hace que res.render funcione con archivos html
      app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
      nunjucks.configure('views', { noCache: true })

      const people = [
          {name: 'Full'}, 
          {name: 'Stacker'}, 
          {name: 'Son'}
        ];  
        
     app.use('/', routes); 
    
    var port = 3000;

    app.listen(port, function (){
        console.log("Hola estas en puerto:  " + port);
    });