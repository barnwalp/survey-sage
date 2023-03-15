import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';
import PreviewState from './context/previewState';

export default function App() {
	const [title, setTitle] = useState('Untitled Form');
	
	// redux state
	const count = useSelector((state) => state.counter.count);
	console.log(`count is from reducer: ${count}`)

	const handleTitle = (event) => {
		console.log(event.target.value);
		setTitle(event.target.value);
	}

	return (
		<div className="App">
			<PreviewState>
				<Navigation
					title={title}
					handleTitle={handleTitle}
				/>
				<Container 
					title={title}
					handleTitle={handleTitle}
				/>
			</PreviewState>
		</div>
  );
}
