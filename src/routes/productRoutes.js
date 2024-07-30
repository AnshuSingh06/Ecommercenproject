const express = require('express');
const productcontroller = require('../controllers/productcontroller');
const router = express.Router();
const { verifyAdmin } = require('../auth');

router.post('/', verifyAdmin, productcontroller.createProduct);
router.get('/', productcontroller.getProducts);
router.put('/:id', verifyAdmin, productcontroller.updateProduct);
router.delete('/:id', verifyAdmin, productcontroller.deleteProduct);

module.exports = router;
