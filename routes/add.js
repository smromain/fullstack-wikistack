var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('add')
});

router.post('/submit', function(req, res) {
  console.log(req.body);
  var models = require('../models/');
  var title = req.body.title;
  var body = req.body.content;
  function urlGenerator (title) {
  	if (title === "" | title === undefined) {
  		return Date.now();
  	}
  		return title.replace(/[\s]/ig,"_").replace(/\W+/g, "");
  };
  var url_name = urlGenerator(title);
  var p = new models.Page({ "title": title, "body":body, "url_name": url_name});
  p.save();
  res.redirect('/');
});

module.exports = router;
