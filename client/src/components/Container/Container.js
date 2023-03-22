import { useState } from 'react';

import questions from '../../model/questions';
import HeadingCard from '../HeadingCard/HeadingCard';
import QuestionCard from '../QuestionCard/QuestionCard';
import Counter from '../Counter/Counter';

const Cards = () => {
	const [questionData, setQuestionData] = useState(questions);

	// const handleSelectChange = (event, item) => {
	// 	console.log(event.target.value);
	// 	console.log(item);
	// 	const nextQuestionData = questionData.map(question => {
	// 		if (question.id === item.id) {
	// 			return ({
	// 				...question,
	// 				input: event.target.value,
	// 			})
	// 		} else {
	// 			return question;
	// 		}
	// 	})
	// 	setQuestionData(nextQuestionData);
	// }

	const handleAnswerChange = (event, item) => {
		console.log(item);
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
	}

	const questionCards = questionData.map(item => {
		return (
			<QuestionCard
				key={item.id}
				selected={item.input}
				value={item.value}
				handleAnswerChange={(event) => handleAnswerChange(event, item)}
			/>
		)
	})
	return (
		<div className="bg-lightBlue h-screen mt-4 p-4 flex flex-col items-center gap-4">
			<HeadingCard />
			{questionCards}
			<Counter />
		</div>
	)
}

export default Cards;
