// props-----------------------------------------------------
export type PizzaBlockProps = {
	id: string
	imageUrl: string
	title: string
	price: number
	types: number[]
	sizes: number[]
	rating: number
}

export type CartItemProps = {
	id: string
	imageUrl: string
	title: string
	type: string
	size: number
	price: number
	count: number
}
//-----------------------------------------------------------

// types-----------------------------------------------------
export type PizzaType = {
	category?: number
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
//--------------------------------------------------------------

// events-------------------------------------------------------
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>
//--------------------------------------------------------------

// interface-----------------------------------------------------
export interface cartSliceState {
	totalPrice: number
	items: CartItemProps[]
}

export type bigPizza = {
	imageUrl: string
	title: string
	price: string
}

export type BigPizzaItem = {
	item: bigPizza
	status: string
}
