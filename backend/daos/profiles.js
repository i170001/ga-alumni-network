const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Personal details
const personalDetailsSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    pronoun: {
        type: String, 
        required: false
    },
    additionalName: {
        type: String, 
        required: false
    }
})


//Contact details 
const contactDetailsSchema = new Schema({
    email: {
        type: String, 
        required: true
    },
    githubLink: {
        type: String, 
        required: true
    },
    phone: {
        type: String, 
        required: false
    },
    website: {
        type: String, 
        required: false
    }
})

//GA Experience 

const gaExperienceSchema = new Schema ({
    gaCourse: {
        type: String, 
        required: true
    },
    gradYear: {
        type: String, 
        required: true
    }
})

//Work Experience
const workExperienceSchema = new Schema ({
    currentJob: {
        type: Boolean, 
        required: false
    },
    companyName: {
        type: String, 
        required: true
    }, 
    jobTitle: {
        type: String, 
        required: true
    },
    specialisation: {
        type: String,
        required: false
    },
    fromDate: {
        type: String, 
        required: true
    },
    toDate: {
        type: String, 
        required: false
    },
    industry: {
        type: String, 
        required: true
    },
    employmentType: {
        type: String, 
        required: true
    },
    workDescription: {
        type: String, 
        required: false
    }
})

//Education experience 
const educationExpSchema = new Schema ({
    current_edu: {
        type: Boolean, 
        required: false
    },
    qualificationType: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String, 
        required: true
    },
    institutionName: {
        type: String, 
        required: false
    },
    yearAttained: {
        type: Number,
        required: false, 
    },
    qualificationName: {
        type: String, 
        required: false
    }
})


const profileSchema = new Schema({
    listing_id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true, 
        required: true
    },

    // user_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // }, 

    personalDetails: personalDetailsSchema,

    contactDetails: contactDetailsSchema,

    gaExperience: [gaExperienceSchema],

    workExperience: [workExperienceSchema], 

    educationExperience: [educationExpSchema],

    skills: {
        type: [String],
        required: true
    }, 

    date_posted: {
        type: Date, 
        default: Date.now
    }

}, {
    timestamps: true,
    collection: 'profiles'
}

);

module.exports = mongoose.model('Profile', profileSchema)