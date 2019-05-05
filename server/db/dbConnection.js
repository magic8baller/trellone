const dbConfig = require('./dbConfig.js')
const pgp = require('pg-promise')

const db = pgp(dbConfig);

db.any('select * from user')
	.then(userData => console.log('DATA:', userData))
	.catch(err => console.log('ERROR:', err))
	.finally(db.$pool.end)

module.exports = db;