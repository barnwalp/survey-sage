import { createSlice } from '@reduxjs/toolkit';

export interface PreviewProps {
	preview: boolean;
}

export const previewSlice = createSlice({
	name: 'preview',
	initialState: {
		preview: false,
	},
	reducers: {
		togglePreview: (state: PreviewProps) => {
			state.preview = !state.preview
		}
	}
})

export const { togglePreview } = previewSlice.actions;
export default previewSlice.reducer;
