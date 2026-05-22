import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import prisma from "./prisma.js";

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: 'http://localhost:3000/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // 1. Safely extract the email using optional chaining
                const userEmail = profile.emails?.[0]?.value;

                if (!userEmail) {
                    return done(new Error("No email found associated with this Google account."));
                }

                // 2. Perform the database upsert safely
                const user = await prisma.user.upsert({
                    where: {
                        googleId: profile.id
                    },
                    // If the user exists, keep their details fresh or update a timestamp
                    update: {
                        username: profile.displayName,
                        email: userEmail,
                    },
                    // If the user doesn't exist, create them
                    create: {
                        googleId: profile.id,
                        username: profile.displayName,
                        email: userEmail,
                    }
                });
            
                return done(null, user);
            } catch (error) {
                return done(error as Error);
            }
        }
    )
);
