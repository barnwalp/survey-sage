import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
	name: 'category',
	initialState: {
		categories: [],
	},
	reducers: {
		addForms: (state, action) => {
			state = action.forms;
		},
		handleDropdown: (state, event) => {
			console.log(state.categories);
			console.log(event.target.value);
		}
	}
})

export const { addForms, handleDropdown } = categorySlice.actions;
export default categorySlice.reducer;
