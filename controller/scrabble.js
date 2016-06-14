var Scrabble = require('../lib/score');
var game = new Scrabble();

var ScrabbleController = {
  index: function(req, res) {
    var locals = {};
    locals.title = 'Melissa Scrabble';
    locals.menu = ["Chart", "Score a Word"];
    res.render('index', { locals });
  },

  chart: function(req, res) {
    var locals = {};
    locals.title = 'Melissa Scrabble';
    locals.menu = ["Chart", "Score a Word"];
    locals.scores = game.scores;
    res.render('chart', { locals });
  },

  score: function(req, res) {
    var locals = {};
    locals.title = 'Melissa Scrabble';
    locals.menu = ["Chart", "Score a Word"];
    locals.scores = game.scores;
    res.render('score', { locals });
  },

  points: function(req, res) {
    var locals = {};
    locals.word = req.body.word
    locals.title = 'Melissa Scrabble';
    locals.menu = ["Chart", "Score a Word"];
    locals.scores = game.scores;
    locals.points = game.score(locals.word);

    res.render('points', { locals });
  }
}

module.exports = ScrabbleController
