var express = require('express')
var router = express.Router();
var profilesCtrl = require('../controllers/profiles')
var securityMiddleware = require('../middlewares/security');

// GET profiles by query params - user searches for others
router.get('/', profilesCtrl.getProfiles);

//GET user's own profile 
router.get('/:user_id', profilesCtrl.getProfile)

//POST create profile (handled with user signup)
router.post('/', profilesCtrl.createProfile);

//PATCH user edits own profile 
router.patch('/:listing_id', profilesCtrl.updateProfile)

//DELETE profile data
// router.delete('/:id', profilesCtrl.deleteProfile)

module.exports = router; 