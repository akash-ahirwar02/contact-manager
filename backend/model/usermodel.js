
// Create a schema and model

const mongo = require("mongoose")

// create schema

const userSchema = new mongo.Schema(
    {
        name: {
            type:String,
            required:true,
            

        },

        email:{
            type:String,
            required:true,
            unique:true
        },

        phone:{
            type:String,
            required:true,
            unique:true,
            maxLength: [10, 'Maximum length of phone no is 10'],
            minLength: [10, 'Minimum length of phone no is 10']

        }
    },
    { timestamps: true }

)



// create model

const usermodel = mongo.model("UserData", userSchema);


module.exports = usermodel;