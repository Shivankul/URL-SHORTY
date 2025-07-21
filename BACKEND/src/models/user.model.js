import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
    }
    // avatar:{
    //     type : String,
    //     required: false,
    //     default: "" }
    // }
});


userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.__v;
    return ret;
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


const User = mongoose.model("User",userSchema);

export default User;