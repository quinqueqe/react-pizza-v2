import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from '../../redux/slices/filter/filterSlice'
import { selectFilter } from '../../redux/selectors'

const Categories = () => {
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
