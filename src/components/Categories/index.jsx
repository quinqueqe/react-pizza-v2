import { useSelector, useDispatch } from 'react-redux'
import { setCategActiveTab } from '../../redux/slices/filter/filterSlice'
import { selectFilter } from '../../redux/selectors'

const Categories = () => {
	const dispatch = useDispatch()
	const { categActiveTab } = useSelector(selectFilter)
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
						onClick={() => dispatch(setCategActiveTab(i))}
						key={i}
						className={categActiveTab === i ? 'active' : ''}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
