import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { bigPizzaSliceState, bigPizza, fetchPizzaArgs } from './types'

export const fetchPizza = createAsyncThunk(
	'pizza/getPizzaId',
	async (params: fetchPizzaArgs) => {
		const { id } = params
		const { data } = await axios.get(
			`https://6759dac0099e3090dbe32341.mockapi.io/items/${id}`
		)
		return data as bigPizza
	}
)

const initialState: bigPizzaSliceState = {
	item: null,
	status: 'loading',
}

const bigPizzaSlice = createSlice({
	name: 'bigPizza',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchPizza.pending, state => {
			state.item = null
			state.status = 'loading'
		})
		builder.addCase(fetchPizza.fulfilled, (state, action) => {
			state.item = action.payload
			state.status = 'ready'
		})
		builder.addCase(fetchPizza.rejected, state => {
			state.item = null
			state.status = 'error'
		})
	},
})

export default bigPizzaSlice.reducer
