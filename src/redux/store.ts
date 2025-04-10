import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import pizzas from './pizzas/slice'
import bigPizza from './bigPizza/slice'
import cart from './cart/slice'
import filter from './filter/slice'
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
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
