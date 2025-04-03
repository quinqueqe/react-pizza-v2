import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		categActiveTab: 0,
		sortActiveTab: 0,
		openPopup: false,
	},
	reducers: {
		setCategActiveTab(state, action) {
			state.categActiveTab = action.payload
		},
		setSortActiveTab(state, action) {
			state.sortActiveTab = action.payload
		},
		setOpenPopup(state, action) {
			state.openPopup = action.payload
		}
	},
})



export const { setCategActiveTab, setSortActiveTab, setOpenPopup } = filterSlice.actions
export default filterSlice.reducer