import { useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';
import PreviewState from './context/previewState';

export default function App() {
	const [title, setTitle] = useState('Untitled Form');
	
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
