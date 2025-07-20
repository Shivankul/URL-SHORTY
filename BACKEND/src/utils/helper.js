import { nanoid } from 'nanoid';
// import { cookieOptions } from '../config/config.js';
import JsonWebToken from 'jsonwebtoken';

export const generateNanoId = (length) =>{
    return nanoid(length); // Generates a unique ID of length 7
}


export const signToken = (payload) => {
    return JsonWebToken.sign(payload,process.env.JWT_SECRET,{expiresIn: '5m'});
}

export const verifyToken = (token) => {
    const decoded = JsonWebToken.verify(token, process.env.JWT_SECRET);
    console.log(decoded.id);
    return decoded.id; // Returns the decoded token
}
