import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const Inputs = () => {
	const [checkItems, setCheckItems] = useState(['Item 1', 'Item 2']);

	const checkbox = checkItems.map(item => {
		return (
			<div className="flex justify-between items-center w-full">
				<div>
					<input 
						className="mr-2"
						type="checkbox"
						id={item}
						name={item}
					/>
					<label for="item">{item}</label>
				</div>
				<button>
					<RxCross2 className="inline-block mr-4 text-2xl p-1 hover:rounded-xl hover:bg-lightBlue"/>	
				</button>
			</div>
		)
	})
	return (
		<div className="ml-4 mt-2 flex flex-col items-start">
			{checkbox}
		</div>
	)
}

export default Inputs;
