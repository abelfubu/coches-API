import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import indexRouter from './routes/index';
import cochesRouter from './routes/coches';

const app = express();

app.use(express.static('dist/public'));
app.use(cors());
app.use(morgan('tiny'));
app.use('/', indexRouter);
app.use('/coches', cochesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`PORT ${PORT} ON FIRE!`));
