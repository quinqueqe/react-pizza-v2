export interface cartSliceState {
	totalPrice: number
	items: CartItemProps[]
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