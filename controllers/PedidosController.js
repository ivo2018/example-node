import PedidosModel from "../models/PedidosModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getPedidoById = async (req, res) => {
  try {
    const pedido = await PedidosModel.findAll({
      where: {
        idcomprador: req.params.idcomprador,
      },
    });
    res.json(pedido.slice(-1));
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getPedidos = async (req, res) => {
  try {
    const Pedido = await PedidosModel.findAll({});
    res.json(Pedido);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const createPedido = async (req, res) => {
  try {
    await PedidosModel.create(req.body);

    res.json({
      message: "Destacado creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
