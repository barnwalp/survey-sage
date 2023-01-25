import { RiQuestionAnswerLine } from 'react-icons/ri';
import { BsTextParagraph } from 'react-icons/bs';
import Inputs from './Inputs';

const QuestionCard = () => {
	return (
		<>
			<div className="rounded-lg py-3 w-3/6 bg-white shadow-2xl text-center">
				<div className="grid grid-cols-3 gap-4">
					<input 
						className="text-sm col-span-2 outline-0 border-b border-b-lightBlue font-normal mx-4 mb-3 focus:border-none"
						type="text" 
						defaultValue="Question"
					/>
					<select className="border text-sm mr-2 p-2 rounded" id="question" name="question">
						<option value="short"><RiQuestionAnswerLine />Short Answer</option>
						<option value="paragraph"><BsTextParagraph /> Paragraph</option>
						<option value="multiple">Multiple Choice</option>
						<option selected value="checkbox">CheckBox</option>
						<option value="dropdown">Dropdown</option>
						<option value="linear">Linear Scale</option>
						<option value="date">Date</option>
						<option value="time">Time</option>
					</select>
				</div>
				<Inputs />
			</div>
		</>
	)
}

export default QuestionCard;
