var express = require('express');
var router = express.Router();
var Controller = require('../controller/scrabble')

/* GET home page. */
router.get('/', Controller.index);

router.get('/scrabble/chart', Controller.chart);

router.get('/scrabble/score', Controller.score);

router.post('/scrabble/points', Controller.points);

module.exports = router;
