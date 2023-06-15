import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface categoryProps {
	categories: {
		_id: string
		id: number
		__v: number
		answer: string
		input: string
		value: string[]
	}[]
}

const initialState: categoryProps = {
	categories: [],
}

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		addForms: (state, action: PayloadAction<categoryProps>) => {
			console.log('printing action payload');
			console.log(action.payload);
			// state.categories = action.payload;
			console.log(state.categories);
		},
		handleDropdown: (state, event) => {
			console.log(state.categories);
			// console.log(event.target.value);
		}
	}
})

export const { addForms, handleDropdown } = categorySlice.actions;
export default categorySlice.reducer;
