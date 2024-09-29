var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("contact");
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.render("contact");
});
module.exports = router;
