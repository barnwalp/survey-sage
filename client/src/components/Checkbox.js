import { useMemo } from 'react';
import { RxCross2 } from 'react-icons/rx';

const Checkbox = ({ checkItems, handleAbort }) => {
	console.log(`checkItems state: ${checkItems}`);

	const checkboxItem = useMemo(() => {
		const checkbox = checkItems.map(item => {
			return (
				<div
					className="flex justify-between items-center w-full"
					key={item}
				>
					<div>
						<input 
							className="mr-2"
							type="checkbox"
							id={item}
							name={item}
						/>
						<label for="item">{item}</label>
					</div>
					<button
						onClick={() => handleAbort(item)}
					>
						<RxCross2
							className="inline-block mr-4 text-2xl p-1 hover:rounded-xl hover:bg-lightBlue"
						/>
					</button>
				</div>
				)
		})
		console.log('checkbox from useMemo');
		console.log(checkbox);
		return checkbox;
	}, [checkItems, handleAbort])

	return (
		<div className="ml-4 mt-2 flex flex-col items-start">
			{checkboxItem}
		</div>
	)
}

export default Checkbox;
