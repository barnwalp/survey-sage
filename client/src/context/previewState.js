import PreviewContext from './previewContext';
import { useState } from "react";

const PreviewState = (props) => {
	const [preview, setPreview] = useState(false)

	const togglePreview = () => {
		setPreview(curPreview => !curPreview);
	}

	return (
		<PreviewContext.Provider value={{preview, togglePreview}}>
			{props.children}
		</PreviewContext.Provider>
	)
}

export default PreviewState;

// This previewState is wrapped around the component that need
// to share the context
