import { createSlice } from '@reduxjs/toolkit';
import questions from '../model/questions';

export const categorySlice = createSlice({
	name: 'category',
	initialState: {
		categories: questions,
	},
	reducers: {
		handleDropdown: (state, event) => {
			console.log(state.categories);
			console.log(event.target.value);
		}
	}
})

export const { handleDropdown } = categorySlice.actions;
export default categorySlice.reducer;
