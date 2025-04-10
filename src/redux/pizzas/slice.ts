import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { PizzaType } from './types'
import { fetchPizzasArgs, pizzaSliceState, Status } from './types'

export const fetchPizzas = createAsyncThunk<PizzaType[], fetchPizzasArgs>(
	'pizza/fetchGetPizzas',
	async params => {
		const { sortType, categoryId, sortDb, currentPage } = params
		const category = categoryId > 0 ? categoryId : ''
		const { data } = await axios.get(
			`https://6759dac0099e3090dbe32341.mockapi.io/items?category=${category}&sortBy=${sortDb[sortType].sortProperty}&order=desc&page=${currentPage}&limit=4`
		)
		return data
	}
)

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
