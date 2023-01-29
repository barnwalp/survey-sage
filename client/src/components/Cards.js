import HeadingCard from './HeadingCard';
import QuestionCard from './QuestionCard';

const Cards = ({ title, handleTitle }) => {
	return (
		<div className="bg-lightBlue h-screen mt-4 p-4 flex flex-col items-center gap-4">
			<HeadingCard	
				title={title}
				handleTitle={handleTitle}
			/>
			<QuestionCard />
		</div>
	)
}

export default Cards;
