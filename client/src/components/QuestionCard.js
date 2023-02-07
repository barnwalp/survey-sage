import Checkbox from './Checkbox';
import Date from './Date';
import Dropdown from './Dropdown';
import Linear from './Linear';
import Multiple from './Multiple';
import Paragraph from './Paragraph';
import Short from './Short';
import Time from './Time';
import { useState } from 'react';
// import { removeItem } from '../utilities/removeItem';

const QuestionCard = ({ selected, answer, handleAnswerChange, handleSelectChange }) => {
	const [questionText, setQuestionText] = useState('Question');

	let renderedElement = <h1>Test</h1>;

	const handleInputChange = (event) => {
		console.log(event.target.value);
		setQuestionText(event.target.value);
	}

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

	if (selected === 'checkbox') {
		renderedElement = <Checkbox
			checkItems={answer}
		// handleAbort={handleAbort}
		/>
	} else if (selected === 'short') {
		renderedElement = <Short
			answer={answer}
			handleAnswerChange={handleAnswerChange}
		/>;
	} else if (selected === 'paragraph') {
		renderedElement = <Paragraph
			paragraph={answer}
			handleAnswerChange={handleAnswerChange}
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
