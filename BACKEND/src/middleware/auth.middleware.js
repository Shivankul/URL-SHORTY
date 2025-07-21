// ye check kragea ki user authenticated hai ki nahi/

import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async(req, res, next) => {
    const token = req.cookies.accesstoken; // Assuming the token is stored in a cookie named 'accesstoken'

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" }); // If no token, user is not authenticated
    }

    try {
        const decoded = verifyToken(token); // Verify the token
        const user = await findUserById(decoded); // Find the user by ID from the token
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" }); // If user not found, unauthorized
        }
        req.user = user; // Attach the user information to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" }); // If token verification fails
    }
}