import mongoose from "mongoose";

const publicSchema = new mongoose.Schema({

    ip : {
        type : String,
        required : true,
        
    },

    text : {
        type : String,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 1800 // 30 minutes
    }

})


export const publicModel = mongoose.model("Public", publicSchema)