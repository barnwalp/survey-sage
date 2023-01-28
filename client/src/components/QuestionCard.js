import Inputs from './Inputs';
// import Test from './Test';
import { useState } from 'react';
import { removeItem } from '../utilities/removeItem';
// import { BsTextParagraph } from 'react-icons/bs';
// import { RiQuestionAnswerLine } from 'react-icons/ri';

const QuestionCard = () => {
	const [checkItems, setCheckItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Others']);
	const [questionText, setQuestionText] = useState('Question');
	const [selected, setSelected] = useState('checkbox');
	const [value, setValue] = useState('yes');

	const handleValue = () => {
		setValue(prevValue => {
			if (prevValue === 'yes') {
				return 'no';
			} else {
				return 'yes';
			}
		})
	}

	const handleInputChange = (event) => {
		console.log(event.target.value);
		setQuestionText(event.target.value);
	}

	const handleChange = (event) => {
		console.log(event.target.value);
		setSelected(event.target.value);
	}

	const handleAbort = (item) => {
		console.log(checkItems);
		const newCheckItems = removeItem(checkItems, item);
		setCheckItems(newCheckItems);
		console.log(checkItems);
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
						onChange={handleChange}
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
				<Inputs 
					value={value}	
					handleValue={handleValue}
					checkItems={checkItems}
					handleAbort={handleAbort}
				/>
			</div>
		</>
	)
}

export default QuestionCard;
