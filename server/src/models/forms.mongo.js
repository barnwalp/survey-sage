const formDb = require('./forms.models');

const saveDataDb = async(forms) => {
	try {
		forms.map(async (form) => {
			console.log(form);
			await formDb.updateOne({
				id: form.id,
			}, form, {
				upsert: true,
			})
		})
	} catch(e) {
		console.log(e);
		return e;
	}
}

const getFormsDb = async() => {
	try {
		const forms = await formDb.find({})
		console.log(forms);
		return forms;
	} catch(e) {
		console.log(e);
	}
}

module.exports = {
	saveDataDb,
	getFormsDb,
}
