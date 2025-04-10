import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPizzasArgs, PizzaType } from './types'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk<PizzaType[], fetchPizzasArgs>(
	'pizza/fetchGetPizzas',
	async params => {
		const { sortType, categoryId, sortDb, currentPage } = params
		const category = categoryId > 0 ? categoryId : ''
		const { data } = await axios.get(
			`https://6759dac0099e3090dbe32341.mockapi.io/items?category=${category}&sortBy=${sortDb[sortType].sortProperty}&order=desc&page=${currentPage}&limit=4`
		)
		return data
	}
)