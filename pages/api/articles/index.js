import dbConnect from "@/db/connect";
import Article from "@/db/models";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const { name, price, available, sizes, image } = req.body;
    try {
      const articles = await Article.find({});
      res.status(200).json(articles);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
