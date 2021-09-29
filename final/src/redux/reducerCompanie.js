import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const companie = createSlice({
	name: 'Person',
	initialState: [{
		id: "1",
		grade: 'gardien',
		companie: 'Zmax'
	}],
	reducers: {
		addCompanie: (state, action) => {
			const newCompanie = {
				id: nanoid(),
				grade: action.payload.grade,
				companie: action.payload.companie
			};
			state.push(newCompanie);
		},
		deleteCompanie: (state, action) => {
			return state.filter(currentState => currentState.id !== action.payload.id)
		},
		update: (state, action) => {
			return state.filter(currentState => currentState.id !== action.payload.id)
		}
	}
})
export const { addCompanie, deleteCompanie } = companie.actions;
export default companie.reducer;