require('dotenv').config();
const jwt = require('jsonwebtoken');
module.exports.createAccessToken= function(id){
	return jwt.sign({
		aud:id,
		iss: process.env.issuer,
		expiresIn: `${process.env.ACCESS_TOKEN_EXP}`, // 1608180941/12/30/24/60/60=51
	},process.env.TOKEN_SECRET)
}
module.exports.createRefreshToken= function(id){
  return jwt.sign({
		aud:id,
    expiresIn: '10d',
	},process.env.TOKEN_REFRESHKEY)
}