import PreviewContext from './previewContext';

const PreviewState = (props) => {
	const state = {
		"name": "Pankaj",
		"class": "12D"
	}

	return (
		<PreviewContext.Provider value={state}>
			{props.children}
		</PreviewContext.Provider>
	)
}

export default PreviewState;
