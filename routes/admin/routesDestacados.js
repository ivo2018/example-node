import express from "express";
import { verifyToken } from "../../middlewares/auth.js";
//import { auth } from "../middlewares/auth.js";
/*
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/BlogController.js";
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);
export default router;
*/

import {
  createDestacado,
  deleteDestacado,
  getAllDestacados,
  getDestacado,
  updateDestacado,
  // verifyToken,
  // auth,
} from "../../controllers/DestacadosController.js";
const router2 = express.Router();

router2.get("/", verifyToken, getAllDestacados);
router2.get("/:id", verifyToken, getDestacado);
router2.post("/", verifyToken, createDestacado);
router2.put("/:id", verifyToken, updateDestacado);
router2.delete("/:id", verifyToken, deleteDestacado);

export default router2;
