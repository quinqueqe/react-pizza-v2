import { configureStore } from '@reduxjs/toolkit'
import bigPizza from './slices/bigPizza/slice'
import cart from './slices/cart/slice'
import filter from './slices/filter/slice'
import pizzas from './slices/pizzas/slice'
export const store = configureStore({
	reducer: {
		cart,
		filter,
		pizzas,
		bigPizza,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>
