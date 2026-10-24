import { Router } from "express";
import getCategories from "../controllers/getCategories.js";
import getCategoryForm from "../controllers/getCategoryForm.js";

const router = Router();

router.get("/", getCategories);
router.get('/new',getCategoryForm)

export default router;
