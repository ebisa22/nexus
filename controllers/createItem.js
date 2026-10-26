import db from '../db/queries.js';

const createItem = async (req, res) => {
 const item = req.body;
 item.price = Number(item.price);
 item.stock = Number(item.stock);
 item.category_id = Number(item.category_id);

 await db.insertItem(item);
  res.redirect('/item/new')
};

export default createItem;
