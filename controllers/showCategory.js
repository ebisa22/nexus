import db from "../db/queries.js";

const showCategory = async (req, res) => {
  const id = req.params.id;

  const categories = await db.getCategoryById(id);

  if (categories.length === 0) {
    return res.status(404).render("404", { title: "Not Found" });
  }

  const category = categories[0];
  const items = await db.getItemsByCategory(id);

  const message =
    req.query.error === "has-items"
      ? "This category cannot be deleted because it still contains items."
      : null;

  res.render("category/show", {
    title: category.name,
    category,
    items,
    message,
  });
};

export default showCategory;
