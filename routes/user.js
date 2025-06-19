import express from "express";
// Controllers
import {
  listUser,
  readUser,
  createUser,
  updateRoleUser,
  deleteUser,
} from "../controllers/user.js";

//middleware
import {authCheck} from "../middlewares/auth.middleware.js"

const router = express.Router();

// ENDPOINT http://localhost:8000/api/users
router.get("/users", authCheck, listUser);
router.patch("/user/role/:id",authCheck, updateRoleUser);
router.delete("/user/:id",authCheck, deleteUser);


router.get("/user", readUser);
router.post("/user", createUser);


// Export
export default router;
