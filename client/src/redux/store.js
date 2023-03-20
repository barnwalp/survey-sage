import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import titleReducer from './titleSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		title: titleReducer
	}
})
