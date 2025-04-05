import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
	'pizza/fetchGetPizzas',
	async (params) => {
		const {sortType, category, sortDb} = params
		const { data } = await axios.get(
			`https://6759dac0099e3090dbe32341.mockapi.io/items?category=${category}&sortBy=${sortDb[sortType].sortProperty}&order=desc`
		)
		return data
	},
)

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState: {
		pizzas: [],
		status: 'loading',
	},
	extraReducers: builder => {
		builder.addCase(fetchPizzas.pending, (state, action) => {
			state.pizzas = []
			state.status = 'loading'
		})
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload
			state.status = 'ready'
		})
		builder.addCase(fetchPizzas.rejected, (state, action) => {
			state.pizzas = []
			state.status = 'error'
		})
	},
})
export default pizzaSlice.reducer
