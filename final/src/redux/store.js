import { configureStore } from '@reduxjs/toolkit';
import companieReducer from './reducerCompanie';
import personReducer from './reducerPerson';


export default configureStore({
	reducer: {   
		persons: personReducer,
		companies:companieReducer
	},
});
