const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const formsRouter = require('./controllers/forms.router');
const { forms } = require('./data/forms');
const { readPassword } = require('./readFile');
const { saveDataDb } = require('./models/forms.mongo');


const PORT = process.env.PORT || 7005;
const app = express();

// cors is needed so that app can access sites outside of its domain
app.use(cors({
	origin: 'http://localhost:3000',
}))
// middleware for logging
app.use(morgan('combined'));
app.use((req, _, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} -> ${req.url} -> ${delta}ms`);
})
app.use(express.json());
app.use('/', formsRouter);

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
