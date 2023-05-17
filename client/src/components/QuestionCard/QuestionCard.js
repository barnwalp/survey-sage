import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Checkbox from '../Checkbox/Checkbox';
import Date from '../Date/Date';
import Dropdown from '../Dropdown/Dropdown';
import Linear from '../Linear/Linear';
import Multiple from '../Multiple/Multiple';
import Paragraph from '../Paragraph/Paragraph';
import Short from '../Short/Short';
import Time from '../Time/Time';

import { handleDropdown } from '../../redux/categorySlice';

const QuestionCard = ({ key, selected, value, handleAnswerChange }) => {
	const dispatch = useDispatch();
	const [questionText, setQuestionText] = useState('Question');
	const btnPreview = useSelector(state => state.preview.preview);

	let renderedElement = <h1>Test</h1>;

	const handleInputChange = (event) => {
		console.log(event.target.value);
		setQuestionText(event.target.value);
	}

	if (selected === 'checkbox') {
		renderedElement = <Checkbox
			checkItems={value}
		/>
	} else if (selected === 'short') {
		renderedElement = <Short
			value={value}
			handleAnswerChange={handleAnswerChange}
		/>;
	} else if (selected === 'paragraph') {
		renderedElement = <Paragraph
			paragraph={value}
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
						onChange={(e) => dispatch(handleDropdown(e))}
						disabled={btnPreview ? "disabled" : ""}
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
