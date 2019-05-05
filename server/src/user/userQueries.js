const pool = require('../../db');

const getAllUsers = (req, res) => {
	pool.query('SELECT * FROM user ORDER BY id ASC', (err, results) => {
		if (err) {
			throw new Error
		}
		res.status(200).json(results.rows)
	})
}

const getUserById = (req, res) => {
	const { id } = +req.params

	pool.query('SELECT * FROM user WHERE id=$1', [ id ], (err, results) => {
		if (err) {
			throw new Error(err);
		}
		res.status(200).json(results.rows);
	})
}

const createUser = (req, res) => {
	const { username, email, password } = req.body;
	pool.query('INSERT INTO user(username, email, password) VALUES ($1, $2, $3)', [ username, email, password ], (err, results) => {
		if (err) {
			throw new Error(err)
		}
		res.status(201).send(`user added: ${ result.rows }`)
	})
}

const updateUser = (req, res) => {
	const { id } = +req.params
	const { username, email, password } = req.body;

	pool.query('UPDATE user SET username=$1, email=$2, password=$3 WHERE id=$4', [ username, email, password, od ], (err, results) => {
		if (err) {
			throw new Error;
		}
		res.status(200).send(`User id ${ id } updated`)
	});
}

const deleteUser = (req, res) => {
	const { id } = +req.params;

	pool.query('DELETE FROM user WHERE id=$1', [ id ], (err, results) => {
		res.status(200).send(`User id ${ id } deleted`)
	})
}

module.exports = {
	getAllUsers, getUserById, createUser, updateUser, deleteUser
}