const profileModel = require('../models/profiles')
// const UserModel = require('../models/user') //Each profile tied to 1 User 

module.exports = {
    createProfile, 
    // getProfiles,
    getProfile,
    updateProfile,
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

// async function getProfile(req, res) {
//     try {
//         console.log("Fetching profile for listing_id:", req.params.listing_id);
//         const profile = await profileModel.getProfile(req.params.listing_id);
//         if (!profile) {
//             return res.status(404).json({ message: 'Profile not found' });
//         }
//         res.json(profile);
//     } catch (error) {
//         console.error("Error fetching profile:", error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }

async function getProfile(req, res) {
    try {
      // console.log("request body: ", req.body)
      const { user_id } = req.params;
      const data = await profileModel.getUserProfile(user_id);
      res.json({ profile: data });
    } catch (err) {
      res.status(500).json({ errorMsg: err.message });
    }
  }

async function createProfile(req, res) {
    try {
        const {
            user_id,
            personalDetails,
            contactDetails,
            gaExperience,
            workExperience,
            educationExperience,
            profilePic,
            skills,
        } = req.body;

        const profileData = {
            user_id,
            personal_details: personalDetails,
            contact_details: contactDetails,
            ga_experience: gaExperience,
            work_experience: workExperience,
            education_experience: educationExperience,
            profilePic: profilePic,
            skills: skills,
        };

        const { success, data, error } = await profileModel.createProfile(profileData);
        // console.log("Controller profileData: ", profileData)

        if (!success) {
            return res.status(400).json({ error });
        }

        res.status(201).json(data);
    } catch (error) {
        console.error("Error creating profile:", error);
        res.status(500).json({ error: 'Failed to create profile' });
    }
}


async function updateProfile(req, res) {
    try {
      // console.log(" Controller request.body.listing_id: ", req.body.listing_id)
      // console.log(" Controller request.body: ", req.body)
      const { listing_id } = req.params;
      const updatedProfile = req.body;
  
      if (!listing_id) {
        return res.status(400).json({ errorMsg: "listing_id is required" });
      }
  
      const existingProfile = await profileModel.updateProfile({ listing_id: listing_id }, updatedProfile, { new: true });
  
      if (!existingProfile) {
        return res.status(404).json({ errorMsg: "Profile not found" });
      }
  
      res.json(existingProfile);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMsg: err.message });
    }
  }



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