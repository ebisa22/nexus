import db from "../db/queries.js";

const showUpdateCategory = async (req, res) => {
  const category_id=req.params.id;
  const categories=await db.getCategoryById(category_id);
  if (categories.length === 0) {
    return res.status(404).render("404", { title: "Not Found" });
  }
  const category=categories[0];
 
  res.render('category/update',{title:category.name,category});
};

export default showUpdateCategory;
