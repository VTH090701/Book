import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: {
        unique: true,
        type: String
    },
    password: String,

})
const User = mongoose.model('user', userSchema);
export default User ; 
