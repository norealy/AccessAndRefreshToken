require('dotenv').config();
const jwt = require('jsonwebtoken');


module.exports.access = function (req,res,next){
    const accessToken = req.header('Access-token');
    if(!accessToken) return res.status(401).send('Access Denis !')
    try {
        const verified = jwt.verify(accessToken,process.env.TOKEN_SECRET);
        req.user = verified;
        console.log((Date.now() / 1000)-verified.iat)
        if((Date.now() / 1000)-verified.iat > process.env.ACCESS_TOKEN_EXP){
          return res.status(400).send('Token has expired - pls refresh token !')
        }
        next();
    } catch (error) {
      return res.status(400).send('Invalid Token')
    }
}

module.exports.refresh = function (req,res,next){
  const refreshToken = req.header('Refresh-token');
  console.log(refreshToken)
  if(!refreshToken) return res.status(401).send('Access Denis !')
  try {
      jwt.verify(refreshToken,process.env.TOKEN_REFRESHKEY);
      next();
  } catch (error) {
      return res.status(400).send('Invalid Token')
  }
}

