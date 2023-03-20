import { useSelector } from 'react-redux';

import TextareaAutosize from 'react-textarea-autosize';

const Paragraph = ({ paragraph, handleAnswerChange }) => {
	const btnPreview = useSelector(state => state.preview.preview);

	return (
		<div className="ml-4 mt-2 flex flex-col items-start">
			<div
				className="flex justify-between items-center w-full"
				key="text"
			>
				<div className="w-full mr-4">
					<TextareaAutosize 
						className="w-full border-0 no-scrollbar overflow-auto text-sm resize-none outline-0 border-b border-b-lightBlue font-normal mx-1 mb-3"
						value={paragraph}
						onChange={handleAnswerChange}
						disabled={btnPreview ? "" : "disabled"}
						name="text"
					/>
				</div>
			</div>
		</div>
	)
}

export default Paragraph;
