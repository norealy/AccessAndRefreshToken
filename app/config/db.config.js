require('dotenv').config();
module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
}