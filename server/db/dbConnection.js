const dbConfig = require('./dbConfig.js')
const { Pool } = require('pg')

const pool = new Pool(dbConfig);

pool.query('SELECT * FROM user', (err, res) => {
	if (err) return console.error('error:', err)
	console.log('response:', res.rows)
})

module.exports = pool;