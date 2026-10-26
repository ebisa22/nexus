import db from "../db/queries.js";

const deleteCategory = async (req, res) => {
  const id = req.params.id;

  const items = await db.getItemsByCategory(id);

  if (items.length > 0) {
    return res.redirect(`/category/${id}?error=has-items`);
  }

  await db.deleteCategory(id);
  return res.redirect("/category");
};

export default deleteCategory;
