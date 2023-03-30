import db from "../database/db.js";

import { DataTypes } from "sequelize";
const ComprasModel = db.define("compras", {
  producto: { type: DataTypes.STRING },
  preciocompra: { type: DataTypes.INTEGER },
  idcomprador: { type: DataTypes.INTEGER },
  idpedido: { type: DataTypes.INTEGER },
  amount: { type: DataTypes.INTEGER },
  photo: { type: DataTypes.BLOB },
  preciounitario: { type: DataTypes.INTEGER },
  preciocantidad: { type: DataTypes.INTEGER },
});

const PedidosModel = db.define("pedidos", {
  idcomprador: { type: DataTypes.INTEGER },
});
export default ComprasModel;
