const express = require("express");
const { getAdminStats } = require("../controllers/analyticsController");
const { protect } = require("../middlewares/auth.Middleware");
const { admin } = require("../middlewares/admin.middleware");
const router = express.Router();

router.get("/", protect, admin, getAdminStats);

module.exports = router;
