import { sort } from '../filter/types'

export interface pizzaSliceState {
	pizzas: PizzaType[]
	status: 'loading' | 'ready' | 'error'
}
export type fetchPizzasArgs = {
	sortType: number
	category: number
	sortDb: sort[]
	currentPage: number
}

export type PizzaItemType = {
	id: string
	count: number
}

export type PizzaType = {
	id: string
	imageUrl: string
	title: string
	price: number
	types: number[]
	sizes: number[]
	rating: number
}


