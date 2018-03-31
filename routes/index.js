var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soil Life' });
});

/* GET home page. */
router.get('/soilCircle', function(req, res, next) {
  res.render('soilCircle', { title: 'Soil Life' });
});

/* GET home page. */
router.get('/sixFs', function(req, res, next) {
  res.render('sixFs', { title: 'Soil Life' });
});

/* GET home page. */
router.get('/soils101', function(req, res, next) {
  res.render('soils101', { title: 'Soil Life' });
});

/* GET home page. */
router.get('/involved', function(req, res, next) {
  res.render('involved', { title: 'Soil Life' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Soil Life' });
});

module.exports = router;
