import db from '../db/queries.js';

const createCateory = async (req, res) => {
  await db.insertCategory(req.body);
  res.redirect('/category/new')
};

export default createCateory;
