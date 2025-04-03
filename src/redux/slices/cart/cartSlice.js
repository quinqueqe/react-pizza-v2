import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalPrice: 0,
	},
	reducers: {
		setTotalPrice(state, action) {
			state.totalPrice = action.payload
		},
		addPizza(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1
				})
			}
		},
		countMinus(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem && findItem.count > 1) {
				findItem.count--
				state.totalPrice -= findItem.price

			}
		},
		countPlus(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem) {
				findItem.count++
				state.totalPrice += findItem.price
			}
		},
		deleteItem(state, action) {
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



export const { setTotalPrice, addPizza, countMinus, countPlus, deleteItem, clearCart } = cartSlice.actions
export default cartSlice.reducer