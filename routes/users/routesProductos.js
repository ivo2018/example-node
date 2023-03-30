import express from "express";
import { verifyToken } from "../../middlewares/auth.js";
import {
  createProducto,
  deleteProducto,
  getAllProductos,
  getProducto,
  updateProducto,
} from "../../controllers/ProductosController.js";
const routerUserProductos = express.Router();

routerUserProductos.get("/", getAllProductos);
routerUserProductos.get("/:id", verifyToken, getProducto);
///routerUserProductos.post("/", createProducto);
///router3.put("/:id", updateProducto);
///router3.delete("/:id", deleteProducto);

export default routerUserProductos;
