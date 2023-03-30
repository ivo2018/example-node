import express from "express";

///import { verifyToken } from "../../middlewares/auth.js";
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
const routerUserDestacados = express.Router();

routerUserDestacados.get("/", getAllDestacados);
//routerUserDestacados.get("/:id", getDestacado);
////router2.get("/:id", getDestacado);
//router2.post("/", createDestacado);
//router2.put("/:id", updateDestacado);
///router2.delete("/:id", deleteDestacado);

export default routerUserDestacados;
