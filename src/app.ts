import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import path from 'path';

import indexRouter from './routes/index';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('dist/public'));

app.use('/', indexRouter);

console.log(process.env.DB_USER)

app.listen(3000, () => console.log('PORT 3000 ON FIRE!'));
