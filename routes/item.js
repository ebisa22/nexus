import { Router } from "express";
import showItem from "../controllers/showItem.js";
import getItemForm from "../controllers/getItemForm.js";
import showUpdateItem from "../controllers/showUpdateItem.js";
import updateItem from "../controllers/updateItem.js";
import createItem from "../controllers/createItem.js";
import deleteCategory from "../controllers/deleteCategory.js";

const router=Router();
router.get('/new',getItemForm);
router.post('/new',createItem);
router.get('/:id',showItem);
router.get('/:id/update',showUpdateItem)
router.post('/:id/update',updateItem)
router.post('/:id/delete',deleteCategory);

export default router;