import UsuariosModel from "../models/UsuariosModel.js";
import AdminModel from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//export const signIn = async (req, res) => {};
/*export const signUp = async (req, res) => {
  try {
    await UsuariosModel.create(
      bcrypt.hashSync(req.body.password, 10),
      req.body
    ).then((user) => {
      let token = jwt.sign({ user: user }, "secret", {
        expiresIn: 60,
      });

      res.json({
        user: user,
        token: token,
        message: "Usuario creado correctamente",
      });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};*/

export const getAllAdmin = async (req, res) => {
  try {
    const users = await AdminModel.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getAdmin = async (req, res) => {
  try {
    const user = await AdminModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await UsuariosModel.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};
/*
export const session = async (req, res) => {
  if (req.body.user) {
    res.send({ loggedIn: true, user: req.body.user });
  } else {
    res.send({ loggedIn: false });
  }
};*/
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
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    await UsuariosModel.create(req.body).then((user) => {
      let token = jwt.sign({ user: user }, "secret", {
        expiresIn: "24h",
      });

      res.json({
        user: user,
        token: token,

        auth: true,
        rol: "comprador",
        //     accessToken: token,
        error: "Usuario creado correctamente",
      });
      //    res
      ///     .header("x-auth-token", token)
      //   .header("access-control-expose-headers", "x-auth-token");
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
export const createAdmin = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    await AdminModel.create(req.body).then((user) => {
      let AdminToken = jwt.sign({ user: user }, "secret", {
        expiresIn: "24h",
      });

      res.json({
        user: user,
        AdminToken: AdminToken,

        auth: true,
        rol: "admin",
        //     accessToken: token,
        error: "Usuario creado correctamente",
      });
      //    res
      ///     .header("x-auth-token", token)
      //   .header("access-control-expose-headers", "x-auth-token");
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    await UsuariosModel.findOne({
      where: {
        email,
      },
    }).then((user) => {
      if (!user) {
        AdminModel.findOne({
          where: {
            email,
          },
        }).then((user) => {
          if (!user) {
            res.status(404).json({ msg: "user con este correo no encontrado" });
          } else {
            if (bcrypt.compareSync(password, user.password)) {
              // Creamos el token
              let AdminToken = jwt.sign({ user: user }, "secret", {
                expiresIn: "24h",
              });

              //  res.status(200).send({ auth: true, accessToken: token });
              res.json({
                user: user,
                AdminToken: AdminToken,
                auth: true,
                rol: "admin",
                //  accessToken: token,
              });
            } else {
              // Unauthorized Access
              res.status(401).json({ msg: "Contraseña incorrecta" });
            }
          }
        });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          // Creamos el token
          let token = jwt.sign({ user: user }, "secret", {
            expiresIn: "24h",
          });

          //  res.status(200).send({ auth: true, accessToken: token });
          res.json({
            user: user,
            token: token,
            auth: true,
            rol: "comprador",
            //  accessToken: token,
          });
        } else {
          // Unauthorized Access
          res.status(401).json({ msg: "Contraseña incorrecta" });
        }
      }
    });
  } catch (error) {
    res.status(500).json(error);
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
    await UsuariosModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Usuario actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
