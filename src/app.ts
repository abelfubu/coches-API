import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import path from 'path';

import indexRouter from './routes/index';

const app = express();

app.use(express.static('dist/public'));

app.use('/', indexRouter);

app.listen(3000, () => console.log('PORT 3000 ON FIRE!'));
