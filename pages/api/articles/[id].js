import Product from "@/db/models";

export default function handler(req, res) {
  const { id } = req.query;

  const product = Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
}
