import React from 'react'
import { useSelector } from 'react-redux'
import {useAppDispatch} from '../../redux/store'
import { selectFilter } from '../../redux/filter/selectors'
import { setCategoryId } from '../../redux/filter/slice'

const Categories: React.FC = () => {
	const dispatch = useAppDispatch()
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
