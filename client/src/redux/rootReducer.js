import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../components/counterSlice';
import titleReducer from '../components/Navigation/titleSlice';

export const rootReducer = combineReducers({
	counter: counterReducer,
	title: titleReducer
})
