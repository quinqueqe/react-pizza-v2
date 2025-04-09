import { sort } from '../filter/types'

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}
export interface pizzaSliceState {
	pizzas: PizzaType[]
	status: Status
}
export type fetchPizzasArgs = {
	sortType: number
	categoryId: number
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
