import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema(
{
    username:{
    type:String,
    required:true,
    unique:true,
    },

    email:{
    type:String,
    required:true,
    },

    password:{
    type:String,
    required:true,
    },

    img:{
    type:String,
    required:false,
    },

    country:{
        type:String,
        required:false,
    },
    phone:{
        type:String,
        required:false,
    },

    desc:{
    type:String,
    required:false,
    },

    isSellar:{
    type:Boolean,
    required:false,    
    }

},{
    timestamps:true
});

export default mongoose.model("User",UserSchema);