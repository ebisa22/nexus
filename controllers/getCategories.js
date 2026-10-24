import { categories } from "../db/queries.js";
const getCategories = async (req, res) => {
  res.render("category/index", { title: "categories", categories});
};

export default getCategories;
