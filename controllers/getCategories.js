import db from "../db/queries.js";

const getCategories = async (req, res) => {
  const categories=await db.getAllCategory();
  res.render("category/index", { title: "categories", categories});
};

export default getCategories;
