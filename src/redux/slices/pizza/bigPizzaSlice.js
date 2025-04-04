import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizza = createAsyncThunk(
	'pizza/getPizzaId',
	async ({ id }) => {
		const { data } = await axios.get(
			`https://6759dac0099e3090dbe32341.mockapi.io/items/${id}`
		)
		return data
	},
)

const bigPizzaSlice = createSlice({
	name: 'bigPizza',
	initialState: {
		item: [],
		status: 'loading'
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizza.pending, (state, action) => {
			state.item = []
			state.status = 'loading'
		})
		builder.addCase(fetchPizza.fulfilled, (state, action) => {
			state.item = action.payload
			state.status = 'ready'
		})
		builder.addCase(fetchPizza.rejected, (state, action) => {
			state.item = []
			state.status = 'error'
		})
	},
})



export default bigPizzaSlice.reducer