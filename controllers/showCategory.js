import db from "../db/queries.js";

const showCategory = async (req, res) => {
  const category_id = req.params.id;
  const categories = await db.getCategoryById(category_id);
  if (categories.length === 0) {
    return res.status(404).render("404", { title: "Not Found" });
  }
  const category = categories[0];
  const items = await db.getItemsByCategory(category_id);
  res.render("category/show", {
    title: category.name,
    category,
    items,
  });
};

export default showCategory;