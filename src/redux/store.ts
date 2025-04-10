import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // localStorage

import { useDispatch } from 'react-redux'
import pizzas from './pizzas/slice'
import bigPizza from './bigPizza/slice'
import cart from './cart/slice'
import filter from './filter/slice'

const cartPersistedConfig = {
	key: 'root', // Ключ для сохранения состояния
	storage, // Хранилище (localStorage по умолчанию)
}

const cartPersistedReducer = persistReducer(cartPersistedConfig, cart)

const rootReducer = combineReducers({
	cart: cartPersistedReducer,
	filter,
	pizzas,
	bigPizza,
})

export const store = configureStore({
	reducer: rootReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
