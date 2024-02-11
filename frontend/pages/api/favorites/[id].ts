// pages/api/favorites/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Favorite, { IFavorite } from '../../../models/Favorite';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
    body,
  } = req;

  // Ensure id is a string
  if (typeof id !== 'string') {
    res.status(400).json({ success: false });
    return;
  }

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        let favorite = await Favorite.findOne({ userId: body.userId });
        if (!favorite) {
          favorite = await Favorite.create({ userId: body.userId, cards: [id] });
        } else {
          favorite.cards.push(id);
          await favorite.save();
        }
        res.status(201).json({ success: true, data: favorite });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const favorite = await Favorite.findOne({ userId: body.userId });
        if (favorite) {
          favorite.cards = favorite.cards.filter((cardId) => cardId !== id);
          await favorite.save();
        }
        res.status(200).json({ success: true, data: favorite });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
