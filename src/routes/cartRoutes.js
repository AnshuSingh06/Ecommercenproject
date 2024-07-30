const express = require('express');
const cartController = require('../controllers/cartcontroller');
const { verifyToken } = require('../auth'); // Make sure this path is correct
const router = express.Router();

router.post('/', verifyToken, cartController.addToCart);
router.get('/:userId', verifyToken, cartController.getCart);
router.post('/remove', verifyToken, cartController.removeFromCart);

module.exports = router;
