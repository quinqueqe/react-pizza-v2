import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortActiveTab, setOpenPopup} from '../../redux/slices/filter/filterSlice'
import { selectFilter } from '../../redux/selectors'

const Sort = () => {
	const { sortActiveTab, openPopup } = useSelector(selectFilter)
	const dispatch = useDispatch()
	const sortDb = [
		{ name: 'популярности', sortProperty: 'rating' },
		{ name: 'цене', sortProperty: 'price' },
		{ name: 'алфавиту', sortProperty: 'title' },
	]
	const sortRef = React.useRef()



	// закрытие popup окна по нажатию в пустую облась экрана сайта
		React.useEffect(() => {
			const handleClickOutside = e => {
				if (sortRef.current && !sortRef.current.contains(e.target)) {
					dispatch(setOpenPopup(false))
				}
			}
	
			document.addEventListener('click', handleClickOutside)
			return () => {
				document.removeEventListener('click', handleClickOutside)
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [])
	return (
		<div ref={sortRef} className='sort'>
			<div className='sort__label'>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
						fill='#2C2C2C'
					/>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={() => dispatch(setOpenPopup(!openPopup))}>
					{sortDb[sortActiveTab].name}
				</span>
			</div>
			{openPopup && (
				<div className='sort__popup'>
					<ul >
						{sortDb.map((item, i) => (
							<li
								onClick={() => {
									dispatch(setSortActiveTab(i))
									dispatch(setOpenPopup(false))
								}}
								className={sortActiveTab === i ? 'active' : ''}
								key={i}
							>
								{item.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sort
