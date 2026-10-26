import db from "../db/queries.js";

const deleteItem = async (req, res) => {
  const id = req.params.id;
  await db.deleteItem(id);
  res.redirect("/");
};

export default deleteItem;
