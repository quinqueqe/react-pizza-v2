/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import styles from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setValueInput } from '../../redux/slices/filter/filterSlice'
import { selectFilter } from '../../redux/selectors'
import debounce from 'lodash.debounce'

const Search: React.FC = () => {
	const dispatch = useDispatch()
	const { valueInput } = useSelector(selectFilter)
	const inputRef = React.useRef<HTMLInputElement>(null)
	const updateSearchValue = React.useCallback(
		debounce(str => {
			dispatch(setValueInput(str))
		}, 200),
		[]
	)
	const handleInputChange = (e: any) => {
		dispatch(setValueInput(e.target.value))
		updateSearchValue(e.target.value)
	}
	const clearInput = () => {
		dispatch(setValueInput(''))
		inputRef.current?.focus()
	}
	return (
		<div className={styles.root}>
			<input
				ref={inputRef}
				value={valueInput}
				onChange={e => handleInputChange(e)}
				className={styles.input}
				placeholder='Поиск пиццы...'
				type='text'
			/>
			<svg
				className={styles.icon}
				enableBackground='new 0 0 32 32'
				id='EditableLine'
				version='1.1'
				viewBox='0 0 32 32'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='14'
					cy='14'
					fill='none'
					id='XMLID_42_'
					r='9'
					stroke='#000000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
					strokeWidth='2'
				/>
				<line
					fill='none'
					id='XMLID_44_'
					stroke='#000000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
					strokeWidth='2'
					x1='27'
					x2='20.366'
					y1='27'
					y2='20.366'
				/>
			</svg>

			{valueInput != '' ? (
				<svg
					onClick={() => clearInput()}
					className={styles.close}
					xmlns='http://www.w3.org/2000/svg'
					width='800px'
					height='800px'
					viewBox='0 0 24 24'
					fill='none'
				>
					<path
						d='M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z'
						fill='#0F0F0F'
					/>
				</svg>
			) : (
				<></>
			)}
		</div>
	)
}

export default Search
