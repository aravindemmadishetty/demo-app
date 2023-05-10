import data from "../data";

export default async function handler(req, res) {
  const { category } = req.query;
  let categoryData = data.filter((item) => item.category === category);
  res.status(200).json(categoryData);
}
