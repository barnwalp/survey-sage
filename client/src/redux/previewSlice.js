import { createSlice } from '@reduxjs/toolkit';

export const previewSlice = createSlice({
	name: 'preview',
	initialState: {
		preview: false,
	},
	reducers: {
		togglePreview: (state) => {
			state.preview = !state.preview
		}
	}
})

export const { togglePreview } = previewSlice.actions;
export default previewSlice.reducer;
