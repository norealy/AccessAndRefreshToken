const express = require('express');
const verifyToken = require('../middleware/verityToken');
const usersController = require('../controllers/users.controller');
const router = express.Router();

router.get('/',verifyToken.access,(req,res)=>{
    usersController.findAllUsers(req,res);
});

module.exports = router;
