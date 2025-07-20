import express from "express";
import {register_user, login_user} from "../controller/auth.controller.js";




const router = express.Router();

router.post('/register', register_user); // Route for user registration
router.post('/login', login_user); // Route for user login   

export default router; // Export the router to be used in app.js
// This will handle the authentication routes for user registration and login