var express = require('express')
var router = express.Router();
var profilesCtrl = require('../controllers/profiles')

//GET profiles
router.get("/", profilesCtrl.getProfiles);

//POST profiles' fields 
router.post('/', profilesCtrl.createProfile);

module.exports = router; 