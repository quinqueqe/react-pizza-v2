import { configureStore } from '@reduxjs/toolkit'
import pizza from './slices/pizza/pizzaSlice'
import filter from './slices/filter/filterSlice'
import cart from './slices/cart/cartSlice'
export default configureStore({
	reducer: {
		pizza,
		filter,
		cart,
	}
})