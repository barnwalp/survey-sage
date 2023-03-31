const formDb = require('./forms.models');

async function saveDataDb(forms) {
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

module.exports = {
	saveDataDb,
}
