//import conec base
import db from "../database/db.js";

import { DataTypes } from "sequelize";
const DestacadosModel = db.define("destacados", {
  title: { type: DataTypes.STRING },
  price: { type: DataTypes.STRING },
  photo: { type: DataTypes.BLOB },

  // rol: { type: DataTypes.STRING },
});
export default DestacadosModel;
