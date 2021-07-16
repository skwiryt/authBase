const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  console.log('req.user: ', req.user);
  res.render('logged', {name: req.user.displayName, image: req.user.photos[0].value});
});
router.get('/profile',
 (req, res) => {  
  res.render('profile');
});
router.get('/profile/settings', (req, res) => {
  res.render('profile-settings');
});




module.exports = router;