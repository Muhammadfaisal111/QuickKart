const express = require('express');
const { addOrderItems, getOrders, getMyOrders, updateOrderStatus } = require('../controllers/orderController');
const {protect} = require('../middlewares/auth.Middleware');
const {admin} = require('../middlewares/admin.middleware');
const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id/status").put(protect, admin, updateOrderStatus);

module.exports = router;