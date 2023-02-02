import { useState } from 'react';
import HeadingCard from './HeadingCard';
import QuestionCard from './QuestionCard';

const Cards = ({ title, handleTitle }) => {
	const [questionData, setQuestionData] = useState([
		// {
		// 	input: 'checkbox', 
		// 	value: ['Item 1, Item 2', 'Item 3', 'Other']
		// },
		{
			input: 'short',
			id: 'short1',
			value: 'Write your answer '
		},
		// {
		// 	input: 'paragraph', 
		// 	value: 'Write your paragraph '
		// },
	])

	const handleSelectChange = (event) => {
		console.log(event.target.value);
	}

	const handleAnswerChange = (event) => {
		console.log(event.target.value);
		setQuestionData((prevVal) => {
			return ({
				...prevVal,
				answer: event.target.value,
			})
		});
	}

	const questionCards = questionData.map(item => {
		<QuestionCard
			selected={item.input}
			value={item.value}
			handleChange={handleSelectChange}
		/>
	})
	return (
		<div className="bg-lightBlue h-screen mt-4 p-4 flex flex-col items-center gap-4">
			<HeadingCard	
				title={title}
				handleTitle={handleTitle}
			/>
			{questionCards}
		</div>
	)
}

export default Cards;
