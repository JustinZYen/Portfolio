const express = require('express');
const mongoose = require("mongoose");

const router = express.Router();
/* GET users listing. */
// pass = NOkaankbbIllI0v3
const mongoURI = process.env.AZURE_COSMOS_CONNECTIONSTRING || process.env.ATLAS_MONGODB_URI;
console.log("URI being used for mongo is"+mongoURI);
mongoose.connect(mongoURI);

const Cat = mongoose.model('Cat', { name: String });

router.get('/', function(req, res, next) {
  res.render("contact");
});

router.post('/submit', function(req, res, next) {
  console.log(req.body);
  const kitty = new Cat({ name: req.body.name });
  kitty.save().then(() => console.log('meow'));
  res.redirect("./success");
});

router.get('/success', function(req, res, next) {
  console.log("redirected to success");
  res.render("contact-success");
});

module.exports = router;
