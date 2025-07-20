
import { createUser, findUserByEmail } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorhandler.js";
import { signToken, verifyToken } from "../utils/helper.js";


export const registerUser =async (name,email,password) => {
    const user =  await findUserByEmail( email );
    if (user) {
        throw new ConflictError("User already exists with this email");
    }
    const newUser = await createUser(name, email, password);

    const token = signToken({ id: newUser._id});
    return token; // Return the newly created user
}

export const loginUser = async (email, password) => {
    const user = await findUserByEmail(email);
    
    if (!user || user.password !== password) {
        throw new ConflictError("Invalid Credentials");
    }

    const token = verifyToken({ id: user._id });
    return token; // Return the token for the logged-in user
}