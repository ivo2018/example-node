import CompraModel from "../models/CompraModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getCompraById = async (req, res) => {
  try {
    const compra = await CompraModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(compra[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getCompraByIdComprador = async (req, res) => {
  try {
    const compra = await CompraModel.findAll({
      where: {
        idcomprador: req.params.idcomprador,
      },
    });
    res.json(compra);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const createCompra = async (req, res) => {
  try {
    await CompraModel.create(req.body);

    res.json({
      message: "Destacado creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
