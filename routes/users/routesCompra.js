import express from "express";
import { verifyToken } from "../../middlewares/auth.js";
import {
  createCompra,
  getCompraById,
  getCompraByIdComprador,
} from "../../controllers/CompraController.js";
const routerUserCompra = express.Router();

//routerUserProductos.get("/", getAllProductos);
//routerUserProductos.get("/:id", verifyToken, getProducto);
routerUserCompra.post("/", createCompra);
routerUserCompra.get("/:id", getCompraById);
routerUserCompra.get("/comprador/:idcomprador", getCompraByIdComprador);

///router3.put("/:id", updateProducto);
///router3.delete("/:id", deleteProducto);

export default routerUserCompra;
