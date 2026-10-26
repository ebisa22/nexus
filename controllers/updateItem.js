import db from "../db/queries.js";

const updateItem = async (req, res) => {
     const item=req.body;
     item.price=Number(item.price);
     item.stock=Number(item.stock);
     item.category_id=Number(item.category_id);
     const id=req.params.id;
     await db.updateItem(id,item);
     res.redirect(`/item/${id}`)
};

export default updateItem;
