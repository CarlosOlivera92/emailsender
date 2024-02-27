import dotenv from 'dotenv';

dotenv.config();

export default {
    googleApiKey: process.env.GOOGLE_API_KEY,
    googleUsername: process.env.GOOGLE_USERNAME,
}