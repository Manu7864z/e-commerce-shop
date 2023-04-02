import mongoose from "mongoose";

const { Schema } = mongoose;

const ArticleSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, required: true },
  sizes: { type: Array, required: true },
  image: { type: String, required: true },
});

const Article =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);

export default Article;
