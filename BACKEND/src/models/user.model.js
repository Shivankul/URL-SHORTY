import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
        index :{ unique: true }
    },
    password: { 
        type: String, 
        required: true 
    },
    // avatar:{
    //     type : String,
    //     required: false,
    //     default: function() {
    //         return getGravatarUrl(this.email);
    //     }
    // }
});


// function getGravatarUrl(email) {
//     const hash = require('crypto')
//         .createHash('md5')
//         .update(email.trim().toLowerCase())
//         .digest('hex');
//     return `https://www.gravatar.com/avatar/${hash}?d=mp`;
// }

const User = mongoose.model("User",userSchema);

export default User;