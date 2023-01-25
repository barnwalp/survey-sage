const createCheckbox = () => {
	const checkbox = [1,2].map(item => {
		return (
			<div>
				<input 
					className="mr-2"
					type="checkbox"
					id={`item ${item}`}
					name={`item ${item}`}
				/>
				<label for="item">{`item ${item}`}</label>
			</div>
		)
	})
	return checkbox;
}

const Inputs = () => {
	const checkbox = createCheckbox();
	return (
		<div className="ml-4 mt-2 flex flex-col items-start">
			{checkbox}
		</div>
	)
}

export default Inputs;
