import { Router } from "express";
import getCategories from "../controllers/getCategories.js";
import getCategoryForm from "../controllers/getCategoryForm.js";
import createCateory from "../controllers/createCategory.js";

const router = Router();

router.get("/", getCategories);
router.get('/new',getCategoryForm);
router.post('/new',createCateory);

export default router;
