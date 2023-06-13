import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import counterReducer from './counterSlice';
import titleReducer from './titleSlice';
import previewReducer from './previewSlice';
import categoryReducer from './categorySlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		heading: titleReducer,
		edit: previewReducer,
		category: categoryReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
