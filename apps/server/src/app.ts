import express, { NextFunction } from 'express';
import passport from 'passport';
import './config/passport.js';
import { ErrorRequestHandler } from 'express';
import { errorHandler } from './middlewares/middleware.js';
import { corsConfig } from './config/cors.js';
import cors from "cors"; 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors(corsConfig));

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});

export default app;
