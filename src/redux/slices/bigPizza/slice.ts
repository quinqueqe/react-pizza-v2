import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { bigPizza } from '../../../@types/types'

export const fetchPizza = createAsyncThunk(
	'pizza/getPizzaId',
	async (id: number) => {
		const { data } = await axios.get(
			`https://6759dac0099e3090dbe32341.mockapi.io/items/${id}`
		)
		return data
	}
)

interface bigPizzaSliceState {
	item: bigPizza[]
	status: 'loading' | 'ready' | 'error'
}

const initialState: bigPizzaSliceState = {
	item: [],
	status: 'loading',
}

const bigPizzaSlice = createSlice({
	name: 'bigPizza',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchPizza.pending, state => {
			state.item = []
			state.status = 'loading'
		})
		builder.addCase(fetchPizza.fulfilled, (state, action) => {
			state.item = action.payload
			state.status = 'ready'
		})
		builder.addCase(fetchPizza.rejected, state => {
			state.item = []
			state.status = 'error'
		})
	},
})

export default bigPizzaSlice.reducer
