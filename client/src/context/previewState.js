import PreviewContext from './previewContext';
import { useState } from "react";

const PreviewState = (props) => {
	const [preview, setPreview] = useState({
		disabled: true,
	});

	const togglePreview = () => {
		setPreview(( curPreview ) => !curPreview);
	}

	return (
		<PreviewContext.Provider value={{preview, togglePreview}}>
			{props.children}
		</PreviewContext.Provider>
	)
}

export default PreviewState;
