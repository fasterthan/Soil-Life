var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soil Life' });
});

/* GET soilCircle page. */
router.get('/soilCircle', function(req, res, next) {
  res.render('soilCircle', {});
});

/* GET sixFs page. */
router.get('/sixFs', function(req, res, next) {
  res.render('sixFs', {});
});

/* GET webOfSoil page. */
router.get('/webOfSoil', function(req, res, next) {
  res.render('webOfSoil', {});
});

/* GET media page. */
router.get('/media', function(req, res, next) {
  res.render('media', {});
});

/* GET soils101 page. */
router.get('/soils101', function(req, res, next) {
  res.render('soils101', {});
});

/* GET involved page. */
router.get('/involved', function(req, res, next) {
  res.render('involved', {});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {});
});

module.exports = router;
