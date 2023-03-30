//import conec base
import db from "../database/db.js";

import { DataTypes } from "sequelize";
const AdminModel = db.define("admins", {
  name: {
    type: DataTypes.STRING,
    validate: {
      isAlpha: {
        msg: "El nombre solo puede contener letras",
      },
      len: {
        args: [2, 255],
        msg: "el nombre tiene que ser minimamente de 2 caracteres",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [6, 255],

        msg: "La contraseña debe tener como minimo 6 caracteres",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: {
        msg: "El mail ttiene que ser un correo valido",
      },
    },
  },
  // rol: { type: DataTypes.STRING },
});
export default AdminModel;
