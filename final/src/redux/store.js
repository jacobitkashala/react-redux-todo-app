import personReducer from './reducerPerson';
import companieReducer from './reducerCompanie';
import { configureStore } from '@reduxjs/toolkit';
import personAsyncReducer from './reducerPersonAsync';
import companieAsyncReducer from './reducerCompanieAsync ';


export default configureStore({
	reducer: {   
		persons: personReducer,
		companies:companieReducer,
		personAsync:personAsyncReducer,
		companieAsync:companieAsyncReducer
	},
});
