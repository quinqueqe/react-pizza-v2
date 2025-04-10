import { createSlice } from '@reduxjs/toolkit'
import { filterSliceState } from './types'

const initialState: filterSliceState = {
	categoryId: 0,
	sortType: 0,
	openPopup: false,
	valueInput: '',
	currentPage: 1,
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSortType(state, action) {
			state.sortType = action.payload
		},
		setOpenPopup(state, action) {
			state.openPopup = action.payload
		},
		setValueInput(state, action) {
			state.valueInput = action.payload
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
	},
})

export const {
	setCategoryId,
	setSortType,
	setOpenPopup,
	setValueInput,
	setCurrentPage,
} = filterSlice.actions
export default filterSlice.reducer
