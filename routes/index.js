var express = require('express');
var router = express.Router();
var Controller = require('../controller/scrabble')

/* GET home page. */
router.get('/', Controller.index);

router.get('/scrabble/chart', Controller.chart)

module.exports = router;
