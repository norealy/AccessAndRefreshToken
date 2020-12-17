const express = require('express');
const verifyToken = require('../middleware/verityToken');
const signToken = require('../middleware/signToken');
const router = express.Router();

router.get('/',verifyToken.refresh,(req,res)=>{
  const userId = req.session.account.id;
  const newAccessToken = signToken.createAccessToken(userId)
  res.status(200).send({"newAccessToken": newAccessToken});
});

module.exports = router;
