import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";



export const createShortUrl = wrapAsync(async (req, res) => {
   
    const {url} = req.body; // this will extract the URL from the request body
    const shortUrl = await createShortUrlWithoutUser(url); // generate a short URL using nanoid
    // we dont just send the send we use json method to send the response beacause we are sending a json object
    res.status(200).json({shortUrl : process.env.APP_URL +'/' + shortUrl}); // send the generated short URL back to the client  
});

export const redirectFromShortUrl =wrapAsync(async (req, res) => {
    const {id} = req.params; // this will extract the short URL from the request parameters
    const url = await getShortUrl(id); // fetch the full URL from the database using the short URL
    if(url){
        res.redirect(url.full_url); // redirect to the full URL
    } else {
        res.status(404).send("URL not found"); // send a 404 error if the URL is not found
    }
});

export const createCustomShortUrl = wrapAsync(async (req, res) => {
    const {url, slug} = req.body; // this will extract the URL and custom slug from the request body
    if (!slug) {
        return res.status(400).json({ message: "Custom slug is required" }); // send a 400 error if slug is not provided
    }
    const shortUrl = await createShortUrlWithUser(url, req.user.id, slug); // generate a short URL using nanoid with user ID and custom slug
    res.status(200).json({ shortUrl: process.env.APP_URL + '/' + shortUrl }); // send the generated short URL back to the client  
});
