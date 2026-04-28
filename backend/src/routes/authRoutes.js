const express = require("express");

const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/authController");
const { protect } = require("../middlewares/auth.Middleware");
const { admin } = require("../middlewares/admin.middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", protect, admin, getUsers);

module.exports = router;
