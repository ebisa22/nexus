import db from "../db/queries.js";

const getItemForm = async (req, res) => {
  const categories=await db.getAllCategory();
  res.render("item/new", { title: "new item", categories});
};

export default getItemForm;
