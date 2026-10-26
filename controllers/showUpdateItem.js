import db from "../db/queries.js";

const showUpdateItem = async (req, res) => {
  const item_id=req.params.id;
  const items=await db.getItemById(item_id);
  if (items.length === 0) {
    return res.status(404).render("404", { title: "Not Found" });
  }
  const item=items[0];
  const categories=await db.getAllCategory();
  res.render('item/update',{title:item.name,item,categories});
};

export default showUpdateItem;
