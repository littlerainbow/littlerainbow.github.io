var express = require('express');
var router = express.Router();
var article = require('./article');

router.use('/article', article);

module.exports = router;
