const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
 res.sendFile(path.join(__dirname+'/game/index.html'));
});

router.get('/Okinawa-95.bin', function (req,res) {
    res.sendFile(path.join(__dirname+'/game/Okinawa-95.bin'));
});
router.get('/Okinawa-95.data', function (req,res) {
    res.sendFile(path.join(__dirname+'/game/Okinawa-95.data'));
});
app.use('/', router);
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});