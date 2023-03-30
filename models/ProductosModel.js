//import conec base
import db from "../database/db.js";

import { DataTypes } from "sequelize";
const ProductosModel = db.define("productos", {
  title: { type: DataTypes.STRING },
  author: { type: DataTypes.STRING },
  price: { type: DataTypes.STRING },
  photo: { type: DataTypes.BLOB },

  category: { type: DataTypes.STRING },
  amount: { type: DataTypes.INTEGER },
  amountStock: { type: DataTypes.INTEGER },
  photo2: { type: DataTypes.BLOB },
  photo3: { type: DataTypes.BLOB },
  descuento: { type: DataTypes.STRING },

  // rol: { type: DataTypes.STRING },
});
export default ProductosModel;
