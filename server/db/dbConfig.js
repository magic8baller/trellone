require('dotenv').config()
const { DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_PORT } = process.env

module.exports = {
	user: DB_USER,
	host: DB_HOST,
	database: DB_NAME,
	password: DB_PASS,
	port: DB_PORT
}