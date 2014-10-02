var express = require('express');
var router = express.Router();
var models = require('../models/');


/* GET home page. */
router.get('/', function(req, res) {
	models.Page.find({}, 'title body url_name', function(err, data) {
		res.render('index', {docs:data});
	});
	;
});

router.use('/add', function(req, res, next) {
	next();
})

router.use('/wiki', function(req, res, next) {
	next();
})


module.exports = router;
