var express = require('express');
var router = express.Router();
/*var dishRouter = require('./routes/dishRouter');
var promoRouter = require('./routes/promoRouter');
var leaderRouter = require('./routes/leaderRouter');
*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Sample' });
});

// router.use('/dishes',dishRouter);
// router.use('/promotions',promoRouter);
// router.use('/leaders',leaderRouter);

module.exports = router;
