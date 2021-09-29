import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCompaniesAsync = createAsyncThunk(
	'Persons/getPersonsAsync',
	async () => {
		const resp = await fetch('http://localhost:7000/companieall');
		if (resp.ok) {
			const companies = await resp.json();
			return { companies };
		}
	}
);
export const addCompanieAsync = createAsyncThunk(
	'addCompanie/addCompanieAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:7000/companieadd', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
				{
					companie: payload.companie,
					grade: payload.grade

				}),
		});
		if (resp.ok) {
			const companie = await resp.json();
			return { companie };
		}
	}
);

// export const toggleCompleteAsync = createAsyncThunk(
// 	'todos/completeTodoAsync',
// 	async (payload) => {
// 		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
// 			method: 'PATCH',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({ completed: payload.completed }),
// 		});

// 		if (resp.ok) {
// 			const todo = await resp.json();
// 			return { todo };
// 		}
// 	}
// );

// export const deleteTodoAsync = createAsyncThunk(
// 	'todos/deleteTodoAsync',
// 	async (payload) => {
// 		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
// 			method: 'DELETE',
// 		});

// 		if (resp.ok) {
// 			return { id: payload.id };
// 		}
// 	}
// );

export const companieAsyncSlice = createSlice({
	name: 'person',
	initialState: [],
	extraReducers: {
		[getCompaniesAsync.fulfilled]: (state, action) => {
			// console.log(action.payload)
			return action.payload.companies;
		},
		[addCompanieAsync.fulfilled]: (state, action) => {
			return action.payload.companie;
			
		},
		// [deleteTodoAsync.fulfilled]: (state, action) => {
		// 	return state.filter((todo) => todo.id !== action.payload.id);
		// },
	},
});

export default companieAsyncSlice.reducer;
