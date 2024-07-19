const profilesDao = require('../daos/profiles');

module.exports = {
    // getProfiles,
    getProfile,
    createProfile,
    updateProfile,
    // findOneAndDelete
}

// function getProfiles(queryFields) {
//     return profilesDao.find(queryFields)
// }

// async function getProfile(queryFields) {
//     return profilesDao.find(queryFields)
// }

async function getProfile(listing_id) {
    try {
        const profile = await profilesDao.findOne({ listing_id });
        return profile;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function createProfile(profileData) {
    try {
        // Check if profile exists
        const existingProfile = await profilesDao.findOne({ 'listing_id': profileData.listing_id });
        if (existingProfile) {
            return { success: false, error: 'Profile already exists' };
        }

        const newProfile = await profilesDao.create(profileData);
        return { success: true, data: newProfile };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create profile');
    }
}

async function updateProfile(filter, update, options) {
    try {
        const updatedProfile = await profilesDao.findOneAndUpdate(filter, update, options);
        return updatedProfile;
    } catch (error) {
        console.error('Error updating profile', error);
        throw error
    }
}

// async function findOneAndDelete(filter, options) {
//     try {
//         const deleteProfile = await profilesDao.findOneAndDelete(filter, options)
//         return deletedProfile; 
//     } catch (error) {
//         console.error('Error deleting profile', error);
//         throw error
//     }
// }

