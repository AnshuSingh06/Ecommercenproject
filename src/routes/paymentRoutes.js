const express = require('express');
const paymentController = require('../controllers/paymentcontroller');
const router = express.Router();
const { verifyToken } = require('../auth');

router.post('/process', verifyToken, paymentController.processPayment);

module.exports = router;
