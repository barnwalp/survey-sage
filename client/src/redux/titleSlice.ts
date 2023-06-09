import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface TitleProps {
	title: string;
}

const initialState: TitleProps = {
	title: 'Untitled Form',
}

export const titleSlice = createSlice({
	name: 'heading',
	initialState,
	reducers: {
		handleTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		}
	}
})

// Other code such as selectors can use the imported `RootState` type
export const selectTitle = (state: RootState) => state.heading.title;

export const { handleTitle } = titleSlice.actions;
export default titleSlice.reducer;
