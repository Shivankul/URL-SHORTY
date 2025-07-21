

export const cookieOptions = {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === 'production', // Ensures the cookie is sent over HTTPS in production
    sameSite: 'lax', // Helps prevent CSRF attacks by restricting how cookies are sent
    maxAge: 60 * 60 * 1000 // Sets the cookie to expire in 1hor minutes
}