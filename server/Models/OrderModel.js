
import { mongoose } from "mongoose";

const OrderSchema = mongoose.Schema({

    user : {
        type :mongoose.Schema.Types.ObjectId,
        require : true,
        ref:"User",
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

const Order = mongoose.model("User", OrderSchema)

export default Order
