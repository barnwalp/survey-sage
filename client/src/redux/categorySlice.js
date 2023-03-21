import { createSlice } from '@reduxjs/toolkit';
import questions from '../model/questions';

export const categorySlice = createSlice({
	name: 'category',
	initialState: {
		categories: questions,
	},
	reducers: {
		handleDropdown: (state) => {
			console.log(state.categories);
		}
	}
})

export const { handleDropdown } = categorySlice.actions;
export default categorySlice.reducer;
