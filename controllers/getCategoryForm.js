const getCategoryForm = async (req, res) => {
  res.render("category/new", { title: "new category"});
};

export default getCategoryForm;
