var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soil Life' });
});

router.get('/whatliesbeneath', function(req,res,next){
  res.render('wlb', {title: 'What Lies Beneath' });
})

module.exports = router;
