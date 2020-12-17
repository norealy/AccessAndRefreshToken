const Account = require('../models/account.models.js');
const _ = require('lodash');
require('dotenv').config();

const signToken = require('../middleware/signToken.js');

exports.create = (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: 'Register Fail - Not empty !!!',
		});
	}
  const account = new Account(req.body);
  account.id = Math.floor(Math.random(1000000000)*1000000000)
	Account.create(account, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err || ' Register Fail !!!',
			});
		} else {
      req.session.account = data;
      let accessToken =  signToken.createAccessToken(data[0].id)
      let refreshToken =  signToken.createRefreshToken(data[0].id);
      console.log(req.session.account.id)
			res.header().status(200).send(
				{"Access-token:":accessToken,"Refresh-token:":refreshToken}); //
		}
	});
	return;
};

exports.authLogin = (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: 'Not empty !',
		});
	}
	const account = new Account(req.body);
	Account.authLogin(account, (err, data) => {
		if (err) {
			res.status(400).send({
				message: err || 'Wrong username or password ! !!!',
			});
		} else {
      req.session.account = data[0];
      let accessToken =  signToken.createAccessToken(data[0].id)
      let refreshToken = signToken.createRefreshToken(data[0].id);
      console.log(req.session.account.id)
      res.header().status(200).send(
      	{"Access-token:":accessToken,"Refresh-token:":refreshToken} //,"Refresh-token:":refreshToken
      );
		}
	});
	return;
};
