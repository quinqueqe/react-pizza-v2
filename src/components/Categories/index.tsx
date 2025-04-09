import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter } from '../../redux/slices/filter/selectors'
import { setCategoryId } from '../../redux/slices/filter/slice'

const Categories: React.FC = () => {
	const dispatch = useDispatch()
	const { categoryId } = useSelector(selectFilter)
	const categoriesDb = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]
	return (
		<div className='categories'>
			<ul>
				{categoriesDb.map((item, i) => (
					<li
						onClick={() => dispatch(setCategoryId(i))}
						key={i}
						className={categoryId === i ? 'active' : ''}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
