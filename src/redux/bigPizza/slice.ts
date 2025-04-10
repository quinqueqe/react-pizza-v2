import { createSlice } from '@reduxjs/toolkit'
import { bigPizzaSliceState } from './types'
import { fetchBigPizza } from './asyncActions'

const initialState: bigPizzaSliceState = {
	item: null,
	status: 'loading',
}

const bigPizzaSlice = createSlice({
	name: 'bigPizza',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchBigPizza.pending, state => {
			state.item = null
			state.status = 'loading'
		})
		builder.addCase(fetchBigPizza.fulfilled, (state, action) => {
			state.item = action.payload
			state.status = 'ready'
		})
		builder.addCase(fetchBigPizza.rejected, state => {
			state.item = null
			state.status = 'error'
		})
	},
})

export default bigPizzaSlice.reducer
