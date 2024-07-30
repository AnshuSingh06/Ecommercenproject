const express = require('express');
const sessionController = require('../controllers/sessioncontroller');
const router = express.Router();
const { verifyToken } = require('../auth');
router.post('/', verifyToken, sessionController.createSession);
router.get('/', verifyToken, sessionController.getSessions);
router.put('/:id', verifyToken, sessionController.endSession);

module.exports = router;


