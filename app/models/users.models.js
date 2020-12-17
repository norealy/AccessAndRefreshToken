const dbConfig = require("../config/db.config");
const db = require('./db');
class User {
	constructor(user) {
    this.id = user.id;
		this.username = user.username;
    this.fullname = user.fullname;
    this.image = user.image;
    this.roles = user.roles;
	}
}

User.showAllUsers = (username,result)=>{
  try {
    db.query(`select roles from users where username='${username}'`,(err,res)=>{
      if(err || !res){
        return result("Error show table users !",null);
      }else{
        try {
          if(res[0].roles===2){
            db.query(`select * from users`,(err1,res1)=>{
              if(err1||!res1){
                return result("Does show all data users !",null)
              }else{
                return result(null,res1)
              }
            })
          }else{
            return result("Permission denis !",null)
          }
        } catch (error) {
          return result("Invalid Token !",null)
        }
      }
    })
  } catch (error) {
    return result("Username dont exsist !",null)
  }
}

module.exports = User;
