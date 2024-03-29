import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Card, { ICard } from '@/models/Card';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const cards: ICard[] = await Card.find({});
        res.status(200).json({ success: true, data: cards });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        let title = await Card.findOne({title: req.body.title});
        if(title){
          res.status(400).json({success: false, message: "Title already exists"});
        }
        const card: ICard = await Card.create(req.body);
        res.status(201).json({ success: true, data: card });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        await Card.findByIdAndDelete(id);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
