import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 13
	},
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		addBy: (state, action) => {
			state.count += action.payload;
		},
	}
})

export const { increment, addBy } = counterSlice.actions;
export default counterSlice.reducer;
