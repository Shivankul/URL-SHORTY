import { generateNanoId } from "../utils/helper.js";

import { saveShortUrl } from "../dao/short_url.js";

export const  createShortUrlWithoutUser = async (url) => {

        const shortUrl = await generateNanoId(7); // generate a short URL using nanoid
        if(!shortUrl) throw new Error("Failed to generate short URL");
        await saveShortUrl(shortUrl, url); // save the short URL to the database
        return shortUrl; // return the generated short URL 
  
}
export const createShortUrlWithUser = async (url,userId , slug = null) => {
    const shortUrl = await generateNanoId(7); // generate a short URL using nanoid
    await saveShortUrl(shortUrl, url,userId); // save the short URL to the database
    return shortUrl; // return the generated short URL 
}