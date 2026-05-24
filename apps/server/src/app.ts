import express from 'express';
import  passport from 'passport';
import './config/passport.js';
import { errorHandler } from './middlewares/middleware.js';
import { corsConfig } from './config/cors.js';
import cors from "cors"; 
import { authRouter } from './routers/auth.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors(corsConfig));

app.use('/auth', authRouter);

app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});

export default app;
