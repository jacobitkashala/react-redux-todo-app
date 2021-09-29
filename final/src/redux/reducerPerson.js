import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const personSlice = createSlice({
	name: 'Person',
	initialState: [{
		id: nanoid(),
		idCompanie: "1",
		nom: 'celio',
		prenom: 'mbaka'
	},],
	reducers: {
		addPerson: (state, action) => {
			const newPerson = {
				id: nanoid(),
				idCompanie: action.payload.idCompanie,
				nom: action.payload.nom,
				prenom: action.payload.prenom
			};
			state.push(newPerson);
		},
	}
})
export const {addPerson}=personSlice.actions;
export default personSlice.reducer;