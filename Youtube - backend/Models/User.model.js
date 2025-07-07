import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     username:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png"
    },
    channels: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Channel' 
    }]

});

const User = mongoose.model("User", userSchema)
export default User;