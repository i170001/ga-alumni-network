const { getProfiles, createProfile } = require('../controllers/profiles');
const profileDao = require('../daos/profiles');

module.exports = {
    createProfile, 
    getProfiles
}

