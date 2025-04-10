export interface bigPizzaSliceState {
	item: bigPizza | null
	status: 'loading' | 'ready' | 'error'
}

export type fetchPizzaArgs = Record<string, string>


export type bigPizza = {
	imageUrl: string
	title: string
	price: string
}

export type BigPizzaItem = {
	item: bigPizza | null
	status: string
}
