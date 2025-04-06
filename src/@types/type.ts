export type PizzaType = {
	id: string
	imageUrl: string
	title: string
	price: number
	types: number[]
	sizes: number[]
	rating: number
}

export type PizzaBlockProps = {
	id: string
	imageUrl: string
	title: string
	price: number
	types: number[]
	sizes: number[]
	rating: number
}

export type PizzaItemType = {
	id: string
	count: number
}

export type CartItemType = {
	id: string
	imageUrl: string
	title: string
	type: string
	size: number
	price: number
}