const express = require('express');

// const db = require('../db/fruits')
const db = require('../db/rants');

const router = express.Router();

router.get('/', (req, res) => {
	db.getAllRants()
		.then((results) => {
			res.json({ results });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Somthing went wrong getting all the Rants' });
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
