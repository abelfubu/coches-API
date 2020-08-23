import { RequestHandler } from 'express';

import * as db from '../db/db-querys';

export const getAll: RequestHandler = async (req, res) => {
  try {
    const main = await db.queryBy('food', { type: 1 });
    const dessert = await db.queryBy('food', { type: 2 });
    const drink = await db.queryBy('food', { type: 3 });
    const insta = await db.queryAll('instagram');
    res.json({ main, dessert, drink, insta });
  } catch (error) {
    console.log(error);
  }
};
