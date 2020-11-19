const express = require('express');

// const db = require('../db/fruits')
const db = require('../db/rants');

const router = express.Router();

router.get('/', (req, res) => {
	db.getAllRants()
		.then(rantsArr => {
			res.json(rantsArr)
		})
	.catch((err) => {
		console.log(err);
		res.status(500).json({ message: 'Request went wrong' });
	});
});


router.post('/', (req, res) => {
	db.addRant(req.body)
		.then((results) => {
			res.json({ results });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Somthing went wrong' });
		});
});

module.exports = router;
