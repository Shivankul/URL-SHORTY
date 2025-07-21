import { generateNanoId } from "../utils/helper.js";

import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";

export const  createShortUrlWithoutUser = async (url) => {

        const shortUrl = generateNanoId(7); // generate a short URL using nanoid
        if(!shortUrl) throw new Error("Failed to generate short URL");
        await saveShortUrl(shortUrl, url); // save the short URL to the database
        return shortUrl; // return the generated short URL 
  
}
export const createShortUrlWithUser = async (url,userId,slug=null) => {
    console.log("slug",slug);
    const shortUrl =  slug || generateNanoId(7); // generate a short URL using nanoid
    console.log("Generated Short URL:", shortUrl); // Log the generated short URL for debugging
    const exists = await getCustomShortUrl(slug); // Check if the custom slug already exists
    console.log("Custom slug exists:", exists); // Log the existence of the custom slug for debugging
    if (exists) {
        throw new Error("Custom slug already exists");
    }
    await saveShortUrl(shortUrl, url,userId); // save the short URL to the database
    return shortUrl; // return the generated short URL 
}