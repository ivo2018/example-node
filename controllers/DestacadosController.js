import DestacadosModel from "../models/DestacadosModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllDestacados = async (req, res) => {
  try {
    const destacados = await DestacadosModel.findAll();
    res.json(destacados);
  } catch (error) {
    res.status(500).json({
      msg: error,
      err,
    });
    res.json({ message: error.message });
  }
};

/*
export const auth = async (req, res, next) => {
  console.log(req.headers);

  if (!req.headers.authorization) {
    res.status(401).json({ msg: "acceso no autorizado" });
  } else {
    let token = req.headers.authorization.split("")[1];
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        res.status(500).json({ msg: "problema", err });
      } else {
        console.log(token);
        next();
      }
    });
  }
};*/

/*
export const verifyToken = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};
export const auth = async (req, res) => {
   jwt.verify(req.token, "secret", (error, authData) => {
    if (error) {
      res.sendStatus(403);
    } else {
      res.json({
        mensaje: "get aprov",
        authData: authData,
      });
    }
  });
};*/

export const getDestacado = async (req, res) => {
  try {
    const destacado = await DestacadosModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(destacado[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createDestacado = async (req, res) => {
  try {
    await DestacadosModel.create(req.body);

    res.json({
      message: "Destacado creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const updateDestacado = async (req, res) => {
  try {
    await DestacadosModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Usuario actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteDestacado = async (req, res) => {
  try {
    await DestacadosModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
