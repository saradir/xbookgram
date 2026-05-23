import express, { NextFunction } from 'express';
import passport from 'passport';
import './config/passport.js';
import jwt from 'jsonwebtoken';
import { errorHandler } from './middlewares/middleware.js';
import { corsConfig } from './config/cors.js';
import cors from "cors"; 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors(corsConfig));

app.get("/auth/google",
     passport.authenticate("google", {
         scope: ["profile", "email"],
         prompt: 'select_account'
         }));
  
app.get(
    "/auth/google/callback",
    passport.authenticate('google', { session: false, failureRedirect: "http://localhost:5173/login?error=auth_failed"}),
    (req, res) => {
        const user = req.user as any;

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: '30d'}
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        res.redirect('http://localhost:5173/dashboard');
    }
);

app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});

export default app;
