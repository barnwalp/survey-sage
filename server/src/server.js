const express = require('express');
const mongoose = require('mongoose');
const { readPassword } = require('./readFile');


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
			await mongoose.connect(MONGO_URL);
		})
		.catch(err => console.log(err));
}

app.listen(PORT, () => {
	console.log(`listening on PORT ${PORT}`);
})

startMongoose();
