import express from "express";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Welcome user, you are logged in.");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Welcome user, you are logged in and you can delete your account.");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Welcome admin, you are logged in and you can delete all accounts.");
});
//update
router.put("/:id", updateUser);
//delete
router.delete("/:id", deleteUser);
//get
router.get("/:id", getUser);
//get all
router.get("/", getUsers);
export default router;
