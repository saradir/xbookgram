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
                const userEmail = profile.emails?.[0]?.value;

                if (!userEmail) {
                    return done(new Error("No email found associated with this Google account."));
                }

                // 2. Perform the database upsert safely
                const user = await prisma.user.upsert({
                    where: {
                        googleId: profile.id
                    },
                    update: {
                        googleId: profile.id
                    },
                    create: {
                        googleId: profile.id,
                        username: profile.displayName,
                        email: userEmail,
                        profilePic: profile.photos?.[0]?.value,
                    }
                });
            
                return done(null, user);
            } catch (error) {
                return done(error as Error);
            }
        }
    )
);
