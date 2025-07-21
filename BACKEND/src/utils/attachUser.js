import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "./helper.js";

export const attachUser =async (req, res, next) => {
    // console.log(req.cookies.accessToken); // Log the cookies to see if the token is present
    const token =  req.cookies.accesstoken
    if(!token) return next(); // if no token is present, proceed without attaching user

    try {
        const decoded = verifyToken(token); // verify the token
        console.log("Decoded ID:", decoded); // Log the decoded ID for debugging
        const user = await findUserById(decoded); // find the user by ID from the decoded token
        console.log("User found:", user); // Log the user found for debugging
        if (!user) return next(); // if user not found, proceed without attaching user      
        req.user = user; // attach the user to the request object
        next(); // proceed to the next middleware or route handler
    }
    catch (error) {
        console.error("Error attaching user:", error); // log the error
        next(); // proceed without attaching user in case of an error
    }
}