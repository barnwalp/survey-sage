import { useState } from 'react';
import HeadingCard from './HeadingCard';
import QuestionCard from './QuestionCard';

const Cards = ({ title, handleTitle }) => {
	const [questionData, setQuestionData] = useState([
		{
			id: 'short1',
			input: 'short',
			value: 'Write your answer',
		},
		{
			id: 'paragraph1',
			input: 'paragraph',
			value: 'Write your paragraph',
		}
	])

	const handleSelectChange = (event) => {
		console.log(event.target.value);
	}

	const handleAnswerChange = (event, item) => {
		// console.log(item);
		console.log(event.target.value);
		const nextQuestionData = questionData.map(question => {
			if (question.id === item.id) {
				return ({
					...question,
					value: event.target.value,
				})
			} else {
				return question;
			}
		})

		setQuestionData(nextQuestionData);
			// console.log(prevArr);
			// const index = prevArr.findIndex(item => item.id === id);
			// console.log(index);
			// prevArr[index].value = event.target.value;
			// console.log(prevArr);
			// test	
			// return ({
			// 	...prevObj,
			// 	answer: event.target.value,
			// })
		// });
	}

	const questionCards = questionData.map(item => {
		return (
			<QuestionCard
				id={item.id}
				selected={item.input}
				answer={item.value}
				handleAnswerChange={(event) => handleAnswerChange(event, item)}
				handleSelectChange={handleSelectChange}
			/>
		)
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
