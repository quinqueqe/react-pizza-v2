import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/slices/filter/filterSlice'

import styles from './Pagination.module.scss'

export default function Pagination() {
	const dispatch = useDispatch()
	return (
		<>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				onPageChange={e => dispatch(setCurrentPage(e.selected + 1))}
				pageRangeDisplayed={4}
				pageCount={3}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</>
	)
}
