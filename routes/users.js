var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', isCade, function(req, res, next) {
  res.send('hi cade!\n');
});

function isCade(req, res, next) {
  console.log('this is middleware!');
  if(req.query.name === 'cade'){
    next();
  } else {
    res.status(401).send("you're not cade!!!\n")
  }
};



// function isLoggedIn(req, res, next) {
//   // if user is authenticated in the session, carry on 
//   if (req.isAuthenticated()){
//     return next();
//   }
//   // if they aren't redirect them to the home page
//   res.redirect('/');
// }

module.exports = router;


