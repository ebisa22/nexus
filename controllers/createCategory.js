 
const createCateory = async (req, res) => {
 const {name,description}=req.body;
  res.redirect('/category/new')
};

export default createCateory;
