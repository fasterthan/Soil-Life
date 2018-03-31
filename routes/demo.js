var express = require('express');
var router = express.Router();

// /* GET demo page. */
// router.get('/', function(req, res, next) {
//   var car = {type:"Fiat", model:"500", color:"white"};
//
//   res.render('demo', {type: car.type, model: car.model, color: car.color});
// });

/* GET demo page. */
router.get('/', function(req, res, next) {
  var car = {type:"Fiat", model:"500", color:"white"};
  var x = {type: car.type, model: car.model, color: car.color};

  res.render('demo', x);
});

module.exports = router;
