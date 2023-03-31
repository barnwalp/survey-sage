const express = require('express');
const mongoose = require('mongoose');

const { forms } = require('./data/forms');
const { readPassword } = require('./readFile');
const { saveDataDb } = require('./models/forms.mongo');


const PORT = process.env.PORT || 7000;
const app = express();

// middleware
app.use(express.json());

mongoose.connection.once('open', () => {
	console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
	console.log(err);
})

const startMongoose = async () => {
	readPassword()
		.then(async (password) => {
			const MONGO_URL = `mongodb+srv://pankaj:${password}@starship-clustor-1.guktlu3.mongodb.net/?retryWrites=true&w=majority`;
			await mongoose.connect(MONGO_URL, {
				dbName: 'forms'
			});
		})
		.catch(err => console.log(err));
	await saveDataDb(forms);
}

app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}`);
})

startMongoose();
