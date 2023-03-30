import express from "express";
import { verifyToken } from "../../middlewares/auth.js";
import {
  createProducto,
  deleteProducto,
  getAllProductos,
  getProducto,
  updateProducto,
} from "../../controllers/ProductosController.js";
const router3 = express.Router();

router3.get("/", verifyToken, getAllProductos);
router3.get("/:id", verifyToken, getProducto);
router3.post("/", verifyToken, createProducto);
router3.put("/:id", verifyToken, updateProducto);
router3.delete("/:id", verifyToken, deleteProducto);

export default router3;
