import 'dotenv/config';


export const corsConfig = {
    origin: process.env.CORS_ORIGINS
    ?.split(",")
    .map(s => s.trim())
    .filter(s => s), // remove empty strings
    credentials: true
}

