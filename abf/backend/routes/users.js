var express = require('express');
var connection = require('../MySQL-db');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM abf.user;', function (err, result) {
      res.send(result);
  })
});

router.post('/LogIn', function (req, res, next) {
  console.log(req.body.ID)
  connection.query('SELECT * FROM abf.user where user_id="'+req.body.ID+'";', function (err, result) {
    console.log(result,"결과")
    if(result[0]==undefined){
      res.send("NoID");
    }
    else if(result[0].passwd==req.body.password){
      res.send("Success");
    }
    else{
      res.send("NoPassword");
    }
  })
});

router.post('/SignUp', function (req, res, next) {
  axios.post('http://203.233.111.5:5055/sign_up', {
    user_id:req.body.user_id,
    passwd:req.body.passwd,
    name:req.body.name,
    type:req.body.type,
    member_id:req.body.member_id,
    grade:req.body.grade,
    dept:req.body.dept,
    major:req.body.major,
    phone_num:req.body.phone_num,
    e_mail:req.body.e_mail,
  })
    .then(response => {
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
});

router.post('/EnrollFace', function (req, res, next) {
  console.log(req.body.member_id)
  axios.post('http://192.168.0.68:5050/regist_face', {
    member_id:req.body.member_id,
  })
    .then(response => {
      res.send(response)
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;

