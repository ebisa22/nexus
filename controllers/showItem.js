import db from "../db/queries.js";

const showItem = async (req, res) => {
  const id = req.params.id;
  const items = await db.getItemById(id);
  if (items.length === 0) {
    return res.status(404).render("404", { title: "Not Found" });
  }
  const item = items[0];
  const category_id = item.category_id;
  const categories=await db.getCategoryById(category_id);
  const category=categories[0];
  item.category_name=category.name;
  
  res.render("item/show", {
    title: item.name,
    item,
  });
  
};

export default showItem;
