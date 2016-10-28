var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res) {
  res.send('The time is ' + new Date().toString());
});

router.get('/user/:username', function(req, res) {
res.send('Hello : ' + req.params.username + '!!! welcome to my home.');
});

module.exports = router;
