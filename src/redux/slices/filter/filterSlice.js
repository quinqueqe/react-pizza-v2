import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		categoryId: 0,
		sortType: 0,
		openPopup: false,
		valueInput: ''
	},
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
		}
	},
})



export const { setCategoryId, setSortType, setOpenPopup, setValueInput } = filterSlice.actions
export default filterSlice.reducer