const httpGetForms = async() => {
	const response = await fetch('http://localhost:7000/forms');
	const formQuestions = await response.json();
	return formQuestions;
}

export {
	httpGetForms,
}
