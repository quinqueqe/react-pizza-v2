export interface filterSliceState {
	categoryId: number
	sortType: number
	openPopup: boolean
	valueInput: string
	currentPage: number
}

export type sort = {
	name: string
	sortProperty: string
}