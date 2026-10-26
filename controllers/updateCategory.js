import db from "../db/queries.js";

const updateCategory = async (req, res) => {
     const id=req.params.id;
     await db.updateCategory(id,req.body);
     res.redirect(`/category/${id}`)
};

export default updateCategory;
