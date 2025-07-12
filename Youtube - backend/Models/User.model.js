import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     username:{
        type:String,
        required:true,
        trim: true,
        minlength: [3, "Username must be at least 3 characters long"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"]
    },
    password:{
        type:String,
        required:true,
        minlength: [8, "Password must be at least 8 characters long"],
    },
    avatar:{
        type:String,
    },
    channel: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Channel' 
    }],
    likedVideos: {
        type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Video' } ],
        default: []
    },

    subscribedChannels: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Channel' 
    }]

}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema)
export default UserModel;