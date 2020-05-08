var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("요청 받음")
  res.send('respond with a resource');
});

module.exports = router;
