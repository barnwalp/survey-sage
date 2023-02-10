import { useContext } from 'react';
import PreviewContext from './../context/previewContext';

const Short = ({ answer, handleAnswerChange }) => {
	const btnPreview = useContext(PreviewContext);
	console.log(btnPreview.preview);	
	
	return (
		<div className="ml-4 mt-2 flex flex-col items-start">
			<div className="flex justify-between items-center w-full">
				<div>
					<input 
						className="text-sm col-span-2 outline-0 border-b border-b-lightBlue font-normal ml-1 mb-3 focus:border-none"
						type="text"
						value={answer}
						disabled={btnPreview.preview ? "disabled" : ""}
						onChange={handleAnswerChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default Short;
