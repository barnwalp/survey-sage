import Checkbox from './Checkbox';
import Date from './Date';
import Dropdown from './Dropdown';
import Linear from './Linear';
import Multiple from './Multiple';
import Paragraph from './Paragraph';
import Short from './Short';
import Time from './Time';
import { useState } from 'react';
import { removeItem } from '../utilities/removeItem';

const QuestionCard = ({ id, selected, value, handleChange }) => {
	const [questionText, setQuestionText] = useState('Question');
	// const [selected, setSelected] = useState('checkbox');
	// const [questions, setQuestions] = useState({
	// 	checkItems: ['Item 1', 'Item 2', 'Item 3', 'Others'],
	// 	answer: 'Write your answer',
	// 	paragraph: 'Write your paragraph',
	// 	multiple: ['Item 1', 'Item 2', 'Item 3'],
	// 	dropdown: ['Item 1', 'Item 2', 'Item 3'],
	// 	date: 'Month, day, Year',
	// 	time: 'Time',
	// })

	let renderedElement = <h1>Test</h1>;

	const handleInputChange = (event) => {
		console.log(event.target.value);
		setQuestionText(event.target.value);
	}

	// const handleChange = (event) => {
	// 	console.log(event.target.value);
	// 	setSelected(event.target.value);
	// }

	// const handleAbort = (item) => {
	// 	console.log(questions.checkItems);
	// 	const newCheckItems = removeItem(questions.checkItems, item);
	// 	setQuestions((prevVal) => {
	// 		return ({
	// 			...prevVal,
	// 			checkItems: newCheckItems,
	// 		})
	// 	});
	// 	console.log(questions.checkItems);
	// }

	// const handleParaChange = (event) => {
	// 	console.log(event.target.value);
	// 	setQuestions((prevVal) => {
	// 		return ({
	// 			...prevVal,
	// 			paragraph: event.target.value,
	// 		})
	// 	});
	// }
	
	if (selected === 'checkbox') {
		renderedElement = <Checkbox 
				checkItems={value}
				// handleAbort={handleAbort}
			/>
	} else if (selected === 'short') {
			renderedElement = <Short 
					answer={value}
					handleAnswerChange={handleChange(id)}
				/>;
	} else if (selected === 'paragraph') {
			renderedElement = <Paragraph 
					paragraph={value}
					// handleParaChange={handleParaChange}
				/>;
	} else if (selected === 'multiple') {
			renderedElement = <Multiple />;
	} else if (selected === 'dropdown') {
			renderedElement = <Dropdown />;
	} else if (selected === 'linear') {
			renderedElement = <Linear />;
	} else if (selected === 'date') {
			renderedElement = <Date />;
	} else if (selected === 'time') {
			renderedElement = <Time />;
	}

	return (
		<>
			<div className="rounded-lg py-3 w-3/6 bg-white shadow-2xl text-center">
				<div className="grid grid-cols-3 gap-4">
					<input 
						className="text-sm col-span-2 outline-0 border-b border-b-lightBlue font-normal mx-4 mb-3 focus:border-none"
						type="text" 
						value={questionText}
						onChange={handleInputChange}
					/>
					<select 
						className="border text-sm mr-2 p-2 rounded" 
						id="question" 
						name="question"
						value={selected}
						onChange={handleSelectChange}
					>
						<option value="short">Short Answer</option>
						<option value="paragraph">Paragraph</option>
						<option value="multiple">Multiple Choice</option>
						<option value="checkbox">CheckBox</option>
						<option value="dropdown">Dropdown</option>
						<option value="linear">Linear Scale</option>
						<option value="date">Date</option>
						<option value="time">Time</option>
					</select>
				</div>
				{renderedElement}
			</div>
		</>
	)
}

export default QuestionCard;
