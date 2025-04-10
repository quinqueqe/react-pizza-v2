import { createSlice } from '@reduxjs/toolkit'
import { pizzaSliceState, Status } from './types'
import { fetchPizzas } from './asyncActions'

const initialState: pizzaSliceState = {
	pizzas: [],
	status: Status.LOADING,
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchPizzas.pending, state => {
			state.pizzas = []
			state.status = Status.LOADING
		})
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchPizzas.rejected, state => {
			state.pizzas = []
			state.status = Status.ERROR
		})
	},
})
export default pizzaSlice.reducer
