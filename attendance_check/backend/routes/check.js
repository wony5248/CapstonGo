var express = require('express');
var connection = require('../MySQL-db')
const axios = require('axios');
var router = express.Router();

router.post('/', function (req, res, next) {
    console.log(req.body)
    // connection.query('SELECT Q_image,W_image,E_image,R_image FROM game_prediction.champion_detail WHERE champ_id='+req.body.champID, function (err, result) {
    //     if (err) throw err;
    //     image = result;
    //     axios.post('http://203.233.111.5:5001/timeline_info', {
    //         gameId: req.body.gameId,
    //         my_id: req.body.my_id
    //     })
    //     .then(response => {
    //         timeLine=response.data
    //         res.send({'image':image, 'timeLine':timeLine});
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // })
});



module.exports = router;



