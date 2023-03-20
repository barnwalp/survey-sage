import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import titleReducer from './titleSlice';
import previewReducer from './previewSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		title: titleReducer,
		preview: previewReducer,
	}
})
