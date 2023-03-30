import express from "express";
import { verifyToken } from "../middlewares/auth.js";

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  loginUser,
  //session,
  // verifyToken,
  // auth,
} from "../controllers/AuthController.js";
const router4 = express.Router();

router4.get("/", verifyToken, getAllUsers);

router4.get("/:id", getUser);
router4.post("/", createUser);
router4.post("/login", loginUser);
//router4.get("/login", session);

//router4.put("/:id", updateUser);
router4.delete("/:id", deleteUser);
export default router4;
