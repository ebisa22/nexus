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

const updateCategory=async (id,new_category)=>{
      const { name, description } = new_category;
      const SQL = `
    UPDATE category
    SET name=$1,
        description=$2
    WHERE category_id=$3
  `;
      try {
        await pool.query(SQL, [name, description,id]);
      } catch (error) {
        console.error(error);
        throw error;
      }
}

const deleteCategory=async (id)=>{
  const SQL = `
    DELETE FROM category
    WHERE category_id=$1
  `;
  try {
    await pool.query(SQL, [id]);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const getItemById=async (id)=>{
   const SQL = `
  SELECT * FROM item 
  WHERE item_id=$1
  `;
     try {
       const { rows } = await pool.query(SQL, [id]);
       return rows;
     } catch (error) {
       console.error(error);
       throw error;
     }
}

const updateItem = async (id, new_item) => {
  const { name, description,price,stock,category_id } = new_item;
  const SQL = `
    UPDATE item
    SET name=$1,
        description=$2,
        price=$3,
        stock=$4,
        category_id=$5
    WHERE item_id=$6
  `;
  try {
    await pool.query(SQL, [name, description, price,stock,category_id,id]);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const insertItem=async (item)=>{
    const { name,description,price,stock,category_id} = item;
    const SQL = `
    INSERT INTO item(name,description,price,stock,category_id) VALUES
    ($1,$2,$3,$4,$5)
  `;
    try {
      await pool.query(SQL, [name, description,price,stock,category_id]);
    } catch (error) {
      console.error(error);
      throw error;
    }
}


const deleteItem = async (id) => {
  const SQL = `
    DELETE FROM item
    WHERE item_id=$1
  `;
  try {
    await pool.query(SQL, [id]);
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
  getCategoryById,
  updateCategory,
  deleteCategory,
  getItemById,
  updateItem,
  insertItem,
  deleteItem
}