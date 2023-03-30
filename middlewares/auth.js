import jwt from "jsonwebtoken";
import { authConfig } from "../config/auth.js";

export const verifyToken = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;

    jwt.verify(req.token, "secret", (err, decoded) => {
      if (err) {
        res.status(500).json({
          msg: "ha ocurrido un problema al decodificar el token",
          err,
        });
      } else {
        req.user = decoded;
        console.log(decoded);
        next();
      }
    });
  }
};

//comrpobar que existe el toke

/* if (!req.headers.authorization) {
    res.status(401).json({ msg: "Access no autorized" });
  } else {
    let token = req.headers.authorization.split("");

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        res.status(500).json({
          msg: "ha ocurrido un problema al decodificar el token",
          err,
        });
      } else {
        console.log(decoded);
        next();
      }
    });
  }*/

/*
export const auth = async (req, res, next) => {
  console.log(req.headers);
  const accesToken = req.header("authorization");
  const stringAccesToken = accesToken;

  if (!stringAccesToken) {
    return res.json({ error: "user not logged in" });
  } else {
    jwt.verify(stringAccesToken, "secret", function (err, decoded) {
      if (err) return console.log(err);
      // Next Code
      next();
    });
  }
};

*/
