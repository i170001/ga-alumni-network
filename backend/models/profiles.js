const profilesDao = require('../daos/profiles');

module.exports = {
    // getProfiles,
    getProfile,
    createProfile,
    // findOneAndUpdate,
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
    const profile = await profilesDao.findOne({listing_id});
        return profile
    } catch (error) {
        throw new Error (error.message) 
    }     
}

async function createProfile(body) {
    console.log('Model request body', body)

    const data = await profilesDao.findOne({'listing_id': body.listing_id})
    console.log(data);
    if (data) {
        return {success: false, error: 'Profile already exists'}
    }
    const newUser = await profilesDao.create(body);
    return {success: true, data: newUser}
}

// async function findOneAndUpdate(filter, update, options) {
//     try {
//         const updatedProfile = await profilesDao.findByIdAndUpdate(filter, update, options);
//         return updatedProfile;
//     } catch (error) {
//         console.error('Error updating profile', error);
//         throw error
//     }
// }

// async function findOneAndDelete(filter, options) {
//     try {
//         const deleteProfile = await profilesDao.findOneAndDelete(filter, options)
//         return deletedProfile; 
//     } catch (error) {
//         console.error('Error deleting profile', error);
//         throw error
//     }
// }

