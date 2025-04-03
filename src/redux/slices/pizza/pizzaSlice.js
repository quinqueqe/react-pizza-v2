import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
	'pizza/fetchGetPizzas',
	async () => {
		const { data } = await axios.get(
			'https://6759dac0099e3090dbe32341.mockapi.io/items'
		)
		// console.log(data)
		return data
	},
)

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState: {
		pizzas: [],
	},
	extraReducers: builder => {
		builder.addCase(fetchPizzas.pending, (state, action) => {
			// state.pizzas = []
		})
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload
		})
		builder.addCase(fetchPizzas.rejected, (state, action) => {
			state.pizzas = []
			console.log('error')
		})
	},
})

// export const {  } = pizzaSlice.actions
export default pizzaSlice.reducer
