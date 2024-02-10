import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
      type: String,
      required: true,
  },
});

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);
export default Card;