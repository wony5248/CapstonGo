var express = require('express');
var connection = require('../MySQL-db');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM game_prediction.champion', function (err, result) {
      res.send(result);
  })
});

module.exports = router;

