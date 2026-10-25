import { Router } from "express";
import getCategories from "../controllers/getCategories.js";
import getCategoryForm from "../controllers/getCategoryForm.js";
import createCateory from "../controllers/createCategory.js";
import showCategory from "../controllers/showCategory.js";
import showUpdateCategory from "../controllers/showUpdateCategory.js";

const router = Router();

router.get("/", getCategories);
router.get('/:id',showCategory);
router.get('/new',getCategoryForm);
router.post('/new',createCateory);
router.get('/:id/update',showUpdateCategory)

export default router;
