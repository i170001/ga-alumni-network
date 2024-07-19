const profilesDao = require('../daos/profiles');

module.exports = {
    // getProfiles,
    // getProfile,
    getUserProfile,
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

// async function getProfile(listing_id) {
//     try {
//         const profile = await profilesDao.findOne({ listing_id });
//         return profile;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }

async function getUserProfile(user_id) {
    return profilesDao.find({ user_id });
  }

async function createProfile(profileData) {
    try {
        console.log("Model profileData: ", profileData)
        // Check if profile exists
        const existingProfile = await profilesDao.findOne({ 'user_id': profileData.user_id });
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
        // Construct update object dynamically
        const dynamicUpdate = {};
        if (update.personalDetails) {
            dynamicUpdate['personal_details'] = update.personalDetails;
        }
        if (update.contactDetails) {
            dynamicUpdate['contact_details'] = update.contactDetails;
        }
        // Add more fields as necessary

        // Perform the update
        const updatedProfile = await profilesDao.findOneAndUpdate(filter, {
            $set: dynamicUpdate
        }, options);

        console.log("Model updateProfile: ", updatedProfile);
        return updatedProfile;
    } catch (error) {
        console.error('Error updating profile', error);
        throw error;
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

