import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const selectedOrders = createSlice({
	name: 'selectedOrders',
	initialState,
	reducers: {
		addOrder: (state, { payload }) => {
			state.push(payload);
		},
		removeOrder: (state, { payload }) => {
			const index = state.findIndex((id) => id === payload);

			if (index !== -1) {
				state.splice(index, 1);
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { addOrder, removeOrder } = selectedOrders.actions;

export default selectedOrders.reducer;
