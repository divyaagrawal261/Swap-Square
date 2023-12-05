import mongoose from 'mongoose';

const usermodel = new mongoose.Schema ({
    username: {
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
    avatar: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    },
    phone: {
        type: Number,
        unique:true,
        required: true,
    },
    address: {
        type:String,
        required:true,
    }
},{timestamps:true})

const User = mongoose.model("User",usermodel);

export default User;

