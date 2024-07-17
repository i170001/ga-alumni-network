const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Personal details
const personalDetailsSchema = new Schema({
    first_name: {
        type: String, 
        required: true
    },
    last_name: {
        type: String, 
        required: true
    },
    pronoun: {
        type: String, 
        required: false
    },
    additional_name: {
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
    github_link: {
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
    current_job: {
        type: Boolean, 
        required: false
    },
    company_name: {
        type: String, 
        required: true
    }, 
    job_title: {
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
    employment_type: {
        type: String, 
        required: true
    },
    work_description: {
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
    qualification_type: {
        type: String,
        required: true
    },
    field_of_study: {
        type: String, 
        required: true
    },
    institution_name: {
        type: String, 
        required: false
    },
    year_attained: {
        type: Number,
        required: false, 
    },
    qualification_name: {
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