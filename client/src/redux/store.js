import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import titleReducer from './titleSlice';
import previewReducer from './previewSlice';
import categoryReducer from './categorySlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		title: titleReducer,
		preview: previewReducer,
		category: categoryReducer,
	}
})
