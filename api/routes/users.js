import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import {
  deleteUser,
  getUser,
  updateUser,
  getUsers,
} from "../controllers/user.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Welcome user, you are logged in.");
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
