import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPersonsAsync = createAsyncThunk(
	'Persons/getPersonsAsync',
	async () => {
		const resp = await fetch('http://localhost:7000/personall');
		if (resp.ok) {
			const personnes = await resp.json();
			return { personnes };
		}
	}
);

// export const addTodoAsync = createAsyncThunk(
// 	'todos/addTodoAsync',
// 	async (payload) => {
// 		const resp = await fetch('http://localhost:7000/todos', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({ title: payload.title }),
// 		});

// 		if (resp.ok) {
// 			const todo = await resp.json();
// 			return { todo };
// 		}
// 	}
// );

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

export const personAsyncSlice = createSlice({
	name: 'person',
	initialState: [],
	extraReducers: {
		[getPersonsAsync.fulfilled]: (state, action) => {
			return action.payload.personnes;
		}
		// [toggleCompleteAsync.fulfilled]: (state, action) => {
		// 	const index = state.findIndex(
		// 		(todo) => todo.id === action.payload.todo.id
		// 	);
		// 	state[index].completed = action.payload.todo.completed;
		// },
		// [deleteTodoAsync.fulfilled]: (state, action) => {
		// 	return state.filter((todo) => todo.id !== action.payload.id);
		// },
	},
});

export default personAsyncSlice.reducer;
