import TextareaAutosize from 'react-textarea-autosize';
import PreviewContext from './../context/previewContext';
import { useContext } from 'react';

const Paragraph = ({ paragraph, handleAnswerChange }) => {
	const btnPreview = useContext(PreviewContext);
	console.log(btnPreview.preview.disabled);

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
						disabled={btnPreview.preview.disabled ? "disabled" : ""}
						name="text"
					/>
				</div>
			</div>
		</div>
	)
}

export default Paragraph;
