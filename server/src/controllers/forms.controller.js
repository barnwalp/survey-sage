const { getFormsDb } = require('../models/forms.mongo');

const getForms = async(_req, res) => {
	try {
		const forms = await getFormsDb();
		res.send(forms);
	} catch(e) {
		console.log(e);
	}
}

module.exports = {
	getForms,
}
