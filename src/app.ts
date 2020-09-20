import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';

import { auth } from './middleware/check-auth';

import viajesRouter from './routes/viajes.routes';
import cochesRouter from './routes/coches.routes';
import authRouter from './routes/auth.routes';

const app: Application = express();

app.use(express.static('dist/public'));
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(passport.initialize());
passport.use(auth);
// app.use('/', indexRouter);
app.use('/coches', cochesRouter);
app.use('/viajes', viajesRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`PORT ${PORT} ON FIRE!`));
