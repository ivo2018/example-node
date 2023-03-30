import UsuariosModel from "../models/UsuariosModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UsuariosModel.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UsuariosModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    await UsuariosModel.create(req.body);

    res.json({
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
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
};
export const updateUser = async (req, res) => {
  try {
    await UsuariosModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Usuario actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await UsuariosModel.destroy(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Usuario actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
