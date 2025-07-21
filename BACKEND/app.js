import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from "dotenv";
import connectDB from './src/config/mongo.config.js';
import short_url from './src/routes/short_url.route.js';
import auth_routes from './src/routes/auth.routes.js';
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorhandler.js';
import cors from "cors";
import { attachUser } from './src/utils/attachUser.js';
import cookieParser from 'cookie-parser';
dotenv.config("./.env");
const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Middleware to parse cookies
app.use(attachUser); // Middleware to attach user to request object
app.use('/api/auth',auth_routes); // 'use ' use krenge beacuse its a middleware and after routung we will use the post method to create a short URL
app.use('/api/create',short_url) // 'use ' use krenge beacuse its a middleware and after routung we will use the post method to create a short URL

app.get('/:id', redirectFromShortUrl); // redirect from short URL to full URL

app.use(errorHandler); // global error handler
app.listen(5000,()=>{
    connectDB();
    console.log("Connected to MongoDB");
    console.log("Server is running on port 5000");
    console.log("Visit http://localhost:5000 to access the server");
    
})