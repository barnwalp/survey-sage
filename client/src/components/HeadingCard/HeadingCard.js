import { useSelector, useDispatch } from 'react-redux';
import { handleTitle } from '../../redux/titleSlice';

const HeadingCard = () => {
	const title = useSelector(state => state.heading.title);
	const dispatch = useDispatch();

	return (
		<div className="rounded-lg py-3 w-3/6 bg-white shadow-2xl text-center grid">
			<input 
				className="text-2xl outline-0 border-b border-b-lightBlue font-normal mx-4 mb-3 focus:border-none"
				type="text" 
				value={title}
				onChange={(e) => dispatch(handleTitle(e.target.value))}
			/>
			<input 
				className="text-sm outline-0 border-b border-b-lightBlue mx-4"
				type="text" 
				defaultValue="Form Description"
			/>
		</div>
	)
}

export default HeadingCard;
