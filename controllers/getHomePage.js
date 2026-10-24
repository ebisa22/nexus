import { categories,items } from "../db/queries.js";
const getHomePage=async (req,res)=>{
    res.render('home',{title:'home',categories,items})
}

export default getHomePage;