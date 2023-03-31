let count = 100;

const forms = [
	{
		id: count++,
		input: 'short',
		value: ['Write your answer'],
		answer: '',
	},
	{
		id: count++,
		input: 'paragraph',
		value: ['Write your paragraph'],
		answer: '',
	},
	{
		id: count++,
	 	input: 'checkbox',
	 	value: ['Item 1', 'Item 2', 'Item 3', 'Other'],
		answer: '',
	},
	{
		id: count++,
	 	input: 'multiple',
	 	value: ['Item 1', 'Item 2', 'Item 3'],
		answer: '',
	},
	{
		id: count++,
	 	input: 'dropdown',
	 	value: ['Item 1', 'Item 2', 'Item 3'],
		answer: '',
	},
	{
		id: count++,
	 	input: 'date',
	 	value: ['Day, Month, Year'],
		answer: '',
	},
	{
		id: count++,
	 	input: 'time',
	 	value: ['Time'],
		answer: '',
	},
]

module.exports = {
	forms,
}
