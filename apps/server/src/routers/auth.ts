import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';

export const authRouter = Router();

authRouter.get("/google",
     passport.authenticate("google", {
         scope: ["profile", "email"],
         prompt: 'select_account'
         }));
  
authRouter.get(
    "/google/callback",
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
