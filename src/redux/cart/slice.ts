import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemProps, cartSliceState } from './types'

const initialState: cartSliceState = {
	totalPrice: 0,
	items: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setTotalPrice(state, action: PayloadAction<number>) {
			state.totalPrice = action.payload
		},
		addPizza(state, action: PayloadAction<CartItemProps>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				})
			}
		},
		countMinus(state, action: PayloadAction<string>) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem && findItem.count > 1) {
				findItem.count--
				state.totalPrice -= findItem.price
			}
		},
		countPlus(state, action: PayloadAction<string>) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem) {
				findItem.count++
				state.totalPrice += findItem.price
			}
		},
		deleteItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem) {
				state.items = state.items.filter(obj => obj.id !== action.payload)
				state.totalPrice -= findItem.price * findItem.count
			}
		},
		clearCart(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const {
	setTotalPrice,
	addPizza,
	countMinus,
	countPlus,
	deleteItem,
	clearCart,
} = cartSlice.actions
export default cartSlice.reducer
