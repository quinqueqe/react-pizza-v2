import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { PizzaType } from './types'
import { fetchPizzasArgs, pizzaSliceState } from './types'

export const fetchPizzas = createAsyncThunk<PizzaType[], fetchPizzasArgs>(
	'pizza/fetchGetPizzas',
	async params => {
		const { sortType, category, sortDb, currentPage } = params
		const { data } = await axios.get(
			`https://6759dac0099e3090dbe32341.mockapi.io/items?category=${category}&sortBy=${sortDb[sortType].sortProperty}&order=desc&page=${currentPage}&limit=4`
		)
		return data
	}
)

const initialState: pizzaSliceState = {
	pizzas: [],
	status: 'loading',
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchPizzas.pending, state => {
			state.pizzas = []
			state.status = 'loading'
		})
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload
			state.status = 'ready'
		})
		builder.addCase(fetchPizzas.rejected, state => {
			state.pizzas = []
			state.status = 'error'
		})
	},
})
export default pizzaSlice.reducer
