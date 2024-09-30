var express = require('express');
var mongoose = require("mongoose");

var router = express.Router();
/* GET users listing. */
// pass = NOkaankbbIllI0v3
const mongoURI = process.env.AZURE_COSMOS_CONNECTIONSTRING || "mongodb+srv://justzyen:NOkaankbbIllI0v3@cluster0.mlg66.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

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
