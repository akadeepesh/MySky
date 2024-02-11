// models/Favorite.ts

import mongoose, { Document, Model } from 'mongoose';

export interface IFavorite extends Document {
  userId: string;
  cards: string[];
}

const FavoriteSchema = new mongoose.Schema<IFavorite>({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  cards: {
    type: [String],
    default: [],
  },
});

export default (mongoose.models.Favorite as Model<IFavorite>) || mongoose.model<IFavorite>('Favorite', FavoriteSchema);
