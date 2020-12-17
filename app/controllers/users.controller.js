const User = require('../models/users.models.js');

exports.findAllUsers = (req, res) => {
  const username = req.session.account.username;
  // console.log(username)
	User.showAllUsers(username, (err, data) => {
		if (err) {
			return res.status(400).send({
				message: err || 'Permission denis !!!',
			});
		} else {
            // console.table(data)
            return res.status(200).send({"Show all users ":data});
		}
	});
};

