var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('projects/projectsList');
});

module.exports = router;