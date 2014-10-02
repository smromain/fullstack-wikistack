var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/:url_name', function(req, res) {
	var name = req.params.url_name;
	models.Page.find({"url_name":name}, 'title body url_name', function(err, data) {
		res.render('show', {docs:data});
	});
});

module.exports = router;
