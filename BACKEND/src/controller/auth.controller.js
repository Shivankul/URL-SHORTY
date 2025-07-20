import { cookieOptions } from "../config/config.js";
import { loginUser, registerUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";


export const register_user =wrapAsync( async (req, res) => {
    const {name,email,password} = req.body; // Extracting name, email, and password from the request body
    const token = await registerUser(name, email, password);
    req.user = user; // Assuming registerUser returns the user object
    res.cookie('accesstoken', token, cookieOptions); // Set the token in a cookie
    res.status(200).json({message : "User registered successfully"}); // Sending the token as a response
    // res.cookie('token', token, cookieOptions); // Set the token in a cookie
});

export const login_user = wrapAsync(async (req, res) => {
    const { email, password } = req.body; // Extracting email and password from the request body
    const token = await loginUser(email, password); // Assuming loginUser is modified to handle login as well
    req.user = user; // Assuming loginUser returns the user object
    res.cookie('accesstoken', token, cookieOptions); // Set the token in a cookie
    res.status(200).json({ message: "User logged in successfully" }); // Sending the token as a response
});