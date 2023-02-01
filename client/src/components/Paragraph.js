const Paragraph = ({ paragraph, handleParaChange }) => {
	return (
		<div className="ml-4 mt-2 flex flex-col items-start">
			<div
				className="flex justify-between items-center w-full"
				key="text"
			>
				<div className="w-full mr-4">
					<textarea 
						className="w-full border-0 no-scrollbar overflow-auto text-sm col-span-2 resize-none outline-0 border-b border-b-lightBlue font-normal mx-1 mb-3 focus:border-none"
						type="text"
						value={paragraph}
						onChange={handleParaChange}
						name="text"
					/>
				</div>
			</div>
		</div>
	)
}

export default Paragraph;
