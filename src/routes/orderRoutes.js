const express = require('express');
const orderController = require('../controllers/ordercontroller');
const router = express.Router();
const { verifyToken } = require('../auth');

router.post('/', verifyToken, orderController.placeOrder);
router.get('/', verifyToken, orderController.getOrders);

module.exports = router;
