import { createSlice } from '@reduxjs/toolkit';

export interface PreviewProps {
	preview: boolean;
}

const initialState: PreviewProps = {
	preview: false,
}

export const previewSlice = createSlice({
	name: 'edit',
	initialState,
	reducers: {
		togglePreview: (state: PreviewProps) => {
			state.preview = !state.preview
		}
	}
})

export const { togglePreview } = previewSlice.actions;
export default previewSlice.reducer;
