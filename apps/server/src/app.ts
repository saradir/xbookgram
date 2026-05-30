import express from 'express';
import './config/passport.js';
import { errorHandler } from './middlewares/general.js';
import { corsConfig } from './config/cors.js';
import cors from 'cors';
import { authRouter } from './routers/auth.js';
import cookieParser from 'cookie-parser';
import { postsRouter } from './routers/posts.js';
import { authenticate } from './middlewares/auth.js';
import { commentRouter } from './routers/comments.js';
import { userRouter } from './routers/user.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsConfig));

app.use('/auth', authRouter);
app.use('/api/posts', authenticate, postsRouter);
app.use('/api/comments', authenticate, commentRouter);
app.use('/api/users', authenticate, userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
