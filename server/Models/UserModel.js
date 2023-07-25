
import { mongoose } from "mongoose";
import bcrypt from "bcrypt"


const UserSchema = mongoose.Schema({

    name : {
        type: String,
        require : true,
    },
    email : {
        type: String,
        require : true,
        unique : true
    },
    password : {
        type: String,
        require : true,
    },

    isAdmin : {
        type: Boolean,
        require : true,
        default : false,
    },

    
},{
    timestamps : true
})


UserSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

const User = mongoose.model("User", UserSchema)

export default User

