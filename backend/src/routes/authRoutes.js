const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const { admin } = require("../middlewares/admin.middleware");

router.post("register", registerUser);
router.post("login", loginUser);
router.get("users", protect, admin, getUsers);
