import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { authenticate } from '../middlewares/auth.js';
import { createValidator } from '../middlewares/validate.js';
import { UserOnboardingSchema } from '@xbookgram/shared';
import { onboardUser } from '../controllers/users.js';
import { getCurrentUser, guestLogin } from '../controllers/auth.js';

export const authRouter = Router();

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
  })
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: `${process.env.CLIENT_URL}/login?error=auth_failed`,
  }),
  (req, res) => {
    const user = req.user as any;

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    res.redirect(`${process.env.CLIENT_URL}/auth/callback?token=${token}`);
  }
);

authRouter.get('/me', authenticate, getCurrentUser);
authRouter.get('/guest-login', guestLogin);

authRouter.post(
  '/onboard',
  authenticate,
  createValidator(UserOnboardingSchema, 'body'),
  onboardUser
);
