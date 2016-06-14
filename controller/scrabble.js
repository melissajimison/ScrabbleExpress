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
    locals.scores = { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8,
      Q: 10, Z: 10
    };
    res.render('chart', { locals });
  },

  score: function(req, res) {
    var locals = {};
    locals.title = 'Melissa Scrabble';
    locals.menu = ["Chart", "Score a Word"];
    locals.scores = { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8,
      Q: 10, Z: 10
    };
    res.render('score', { locals });
  },

  points: function(req, res) {
    var locals = {};
    locals.word = req.body.word
    locals.title = 'Melissa Scrabble';
    locals.menu = ["Chart", "Score a Word"];
    locals.scores = { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8,
      Q: 10, Z: 10
    };
    locals.points = game.score(locals.word);

    res.render('points', { locals });
  }
}

module.exports = ScrabbleController
