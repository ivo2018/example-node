import db from "../database/db.js";

import { DataTypes } from "sequelize";

const PedidosModel = db.define("pedidos", {
  idcomprador: { type: DataTypes.INTEGER },
});
export default PedidosModel;
