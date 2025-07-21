import { nanoid } from 'nanoid';
// import { cookieOptions } from '../config/config.js';
import jsonwebtoken from 'jsonwebtoken';

export const generateNanoId = (length) =>{
    return nanoid(length); // Generates a unique ID of length 7
}


export const signToken = (payload) => {
    return jsonwebtoken.sign(payload,process.env.JWT_SECRET,{expiresIn: '1h'});
}

export const verifyToken = (token) => {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    console.log(decoded.id);
    return decoded.id; // Returns the decoded token
}
