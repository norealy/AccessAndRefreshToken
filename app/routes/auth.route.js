const express = require('express');
const loginController = require('../controllers/auth.controller');
const router = express.Router();

router.post("/signup", loginController.create);
router.post("/signin", loginController.authLogin);

module.exports = router
