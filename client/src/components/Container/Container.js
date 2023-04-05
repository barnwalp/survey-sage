import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from '../Counter/Counter';
import { httpGetForms } from '../../request';
import questions from '../../model/questions';
import { addForms } from '../../redux/categorySlice';
import HeadingCard from '../HeadingCard/HeadingCard';
import QuestionCard from '../QuestionCard/QuestionCard';

const Cards = () => {
	const dispatch = useDispatch();
	const forms = useSelector(state => state.category.categories);
	console.log('forms from useSelector');
	console.log(forms);

	const [questionData, setQuestionData] = useState(questions);

	useEffect(() => {
		const fetchData = async() => {
			const forms = await httpGetForms();
			// console.log('from useEffect');
			// console.log(forms);
			dispatch(addForms(forms));
		}
		fetchData();
	}, [])

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

	const questionCards = forms.map(item => {
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
		<div className="bg-hexagon min-h-screen mt-4 p-4 flex flex-col items-center gap-4">
			<HeadingCard />
			{questionCards}
			<Counter />
		</div>
	)
}

export default Cards;
