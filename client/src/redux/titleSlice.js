import { createSlice } from '@reduxjs/toolkit';

export const titleSlice = createSlice({
	name: 'title',
	initialState: {
		title: 'Untitled Form',
	},
	reducers: {
		handleTitle: (state, action) => {
			state.title = action.payload;
		}
	}
})

export const { handleTitle } = titleSlice.actions;
export default titleSlice.reducer;
