import mongoose, { Document, Model } from 'mongoose';

export interface ICard extends Document {
  title: string;
  description: string;
  content: string;
}

const CardSchema = new mongoose.Schema<ICard>({
  title: {
    type: String,
    required: [true, 'Please provide a title for this card.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this card.'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content for this card.'],
  },
});

export default (mongoose.models.Card as Model<ICard>) || mongoose.model<ICard>('Card', CardSchema);
