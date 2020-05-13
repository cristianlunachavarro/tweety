
const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBanks = require('../tweetBanks');
router.get('/', function (req, res) {
  let tweets = tweetBanks.list();
  res.render( 'index', { tweets: tweets } );
});

//hacer una ruta up get, res s
router.get('/stylesheets/style.css', function (req, res){
    res.sendFile("index", { tweets: tweets })    
}),

module.exports = router;

