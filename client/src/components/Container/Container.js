import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { httpGetForms } from '../../request';
import { addForms } from '../../redux/categorySlice';
import HeadingCard from '../HeadingCard/HeadingCard';
import QuestionCard from '../QuestionCard/QuestionCard';

const Cards = () => {
	const dispatch = useDispatch();
	const forms = useSelector(state => state.category.categories);
	console.log('forms from useSelector');
	console.log(forms);

	useEffect(() => {
		const fetchData = async() => {
			const forms = await httpGetForms();
			dispatch(addForms(forms));
		}
		fetchData();
	}, [])


	const questionCards = forms.map(item => {
		return (
			<QuestionCard
				key={item.id}
				selected={item.input}
				value={item.value}
				handleAnswerChange={(event) => console.log(event)}
			/>
		)
	})
	return (
		<div className="bg-hexagon min-h-screen mt-4 p-4 flex flex-col items-center gap-4">
			<HeadingCard />
			{questionCards}
		</div>
	)
}

export default Cards;
