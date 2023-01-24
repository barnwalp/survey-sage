const HeadingCard = () => {
	return (
		<div className="rounded-lg py-3 w-3/6 bg-white shadow-2xl text-center grid">
			<input 
				className="text-2xl font-normal px-2 mx-4 mb-3 focus:border-none"
				type="text" 
				defaultValue="Untitled Form"
			/>
			<input 
				className="text-sm mx-4 px-2"
				type="text" 
				defaultValue="Form Description"
			/>
		</div>
	)
}

export default HeadingCard;
