import pool from './pool.js';

const getAllCategory=async()=>{
  const SQL = `
    SELECT
    category.category_id,
    category.name,
    category.description,
    COUNT(item.item_id)::INTEGER AS item_count
FROM category
LEFT JOIN item
    ON category.category_id = item.category_id
GROUP BY
    category.category_id,
    category.name,
    category.description
ORDER BY category.category_id;
  `;
  try{
    const {rows}=await pool.query(SQL);
    return rows;
  }catch(error){
    console.error(error);
    throw error;
  }
}

const getAllItems=async ()=>{
const SQL = `
  SELECT * FROM item
  `;
try {
  const { rows } = await pool.query(SQL);
  return rows;
} catch (error) {
  console.error(error);
  throw error;
}
}

const getItemsByCategory=async (id)=>{
  const SQL = `
  SELECT * FROM item 
  WHERE category_id=$1
  `;
  try{
    const {rows}=await pool.query(SQL,[id]);
    return rows;
  }catch(error){
    console.error(error);
    throw error;
  }
}

const insertCategory=async (category)=>{
  const {name,description}=category;
  const SQL=`
    INSERT INTO category(name,description) VALUES
    ($1,$2)
  `
  try{
    await pool.query(SQL,[name,description])
  }catch(error){
    console.error(error);
    throw error;
  }
}

const getCategoryById = async (id) => {
  const SQL = `
  SELECT * FROM category 
  WHERE category_id=$1
  `;
  try {
    const { rows } = await pool.query(SQL, [id]);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default {
  getAllCategory,
  getAllItems,
  getItemsByCategory,
  insertCategory,
  getCategoryById
}