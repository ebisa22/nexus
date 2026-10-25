import db from "../db/queries.js";
const getHomePage=async (req,res)=>{
    const categories=await db.getAllCategory();
    const items=await db.getAllItems();
    
    res.render('home',{title:'home',categories,items})
}

export default getHomePage;