var ProfileModel = require('../models/profiles')

module.exports = {
    createProfile, 
    getProfiles
}

function getProfiles (req, res) {
    res.json (
        {profile: ProfileModel.getProfiles()}
    )}


async function createProfile (req, res) {

    try {
        const profile = await ProfileModel.createProfile(req.body);
        res.status(201).json(profile);
    } catch (error) {
        console.log(error);
        res.status(500).json({error})
    }
}