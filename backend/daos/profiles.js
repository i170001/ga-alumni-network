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
        require: false
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
        type: Number, 
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
        required: false
    },
    gradYear: {
        type: Date, 
        required: false
    }
})

//Work Experience
const workExperienceSchema = new Schema ({
    isCurrentJob: {
        type: Boolean, 
        required: false
    },
    companyName: {
        type: String, 
        required: true
    }, 
    jobTitle: {
        type: String, 
        required: false
    },
    specialisation: {
        type: String,
        required: false
    },
    fromDate: {
        type: String, 
        required: false
    },
    toDate: {
        type: String, 
        required: false
    },
    industry: {
        type: String, 
        required: false
    },
    employmentType: {
        type: String, 
        required: false
    },
    workDescription: {
        type: String, 
        required: false
    }
})

//Education experience 
const educationExpSchema = new Schema ({
    isCurrentEdu: {
        type: Boolean, 
        required: false
    },
    qualificationType: {
        type: String,
        required: false
    },
    fieldOfStudy: {
        type: String, 
        required: false
    },
    institutionName: {
        type: String, 
        required: false
    },
    yearAttained: {
        type: Number,
        required: false 
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

    personal_details: personalDetailsSchema,

    contact_details: contactDetailsSchema,

    ga_experience: [gaExperienceSchema],

    work_experience: [workExperienceSchema], 

    education_experience: [educationExpSchema],

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