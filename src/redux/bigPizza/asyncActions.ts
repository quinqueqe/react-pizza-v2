import { createAsyncThunk } from '@reduxjs/toolkit'
import { bigPizza, fetchPizzaArgs } from './types'
import axios from 'axios'

export const fetchBigPizza = createAsyncThunk(
	'pizza/getPizzaId',
	async (params: fetchPizzaArgs) => {
		const { id } = params
		const { data } = await axios.get(
			`https://6759dac0099e3090dbe32341.mockapi.io/items/${id}`
		)
		return data as bigPizza
	}
)
