const profileModel = require('../models/profiles')
// const UserModel = require('../models/user') //Each profile tied to 1 User 

module.exports = {
    createProfile, 
    // getProfiles,
    getProfile,
    // updateProfile,
    // deleteProfile
}


// async function getProfiles (req, res) {
//     try {
//         const query = req.query;
//         const profiles = await profileModel.find(query);
//         res.json(profiles);
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ error })
//     }
// }


// async function getProfile (req, res) {
//     try {
//         const profile = await profileModel.getProfile({ user_id: req.params.id})
//         if (!profile) {
//             return res.status(404).json({ message: 'Profile not found'})
//         }
//         res.json(profile); 
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({error})
//     }
// }

async function getProfile(req, res) {
    try {
        const profile = await profileModel.getProfile(req.params.id);
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


async function createProfile(req, res) {
    try {
        const { user_id, personalDetails, contactDetails, gaExperience, workExperience, educationExperience, profilePic } = req.body;

        // Assuming personalDetails is directly included in req.body
        const profileData = {
            user_id, 
            personal_details: personalDetails, 
            contact_details: contactDetails, 
            ga_experience: gaExperience,
            work_experience: workExperience,
            education_experience: educationExperience,
            profile_pic: profilePic 
        };

        const { success, data, error } = await profileModel.createProfile(profileData);

        if (!success) {
            return res.status(400).json({ error });
        }

        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create profile' });
    }
}


// async function updateProfile(req, res) {
//     try {
//         const {id} = req.params; 
//         const updatedProfile = req.body; 

//         const profile = await profileModel.findOneAndUpdate(
//             {user_id: id},
//             updatedProfile,
//         )

//         if (!profile) {
//             return res.status(404).json({message: 'Profile not found'})
//         }
//         res.json(profile);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({error: error.message})
//     }}



// async function deleteProfile (req,res) {
//     try {
//         const {listing_id} = req.params; 
//         if (!listing_id) {
//             return res.status(400).json({message: 'Listing ID is required'});
//         }
//         const deletedProfile = await profileModel.findOneAndDelete({listing_id})

//         if (!deletedProfile){
//             return res.status(404).json({ message: 'Profile not found'})
//         }
//         res.json({message: 'profile deleted', deleteProfile})

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error})
//     }
// }; 