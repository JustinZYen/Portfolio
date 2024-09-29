var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("contact");
});

router.post('/submit', function(req, res, next) {
  console.log(req.body);
  res.redirect("./success");
});

router.get('/success', function(req, res, next) {
  console.log("redirected to success");
  res.render("contact-success");
});

module.exports = router;
