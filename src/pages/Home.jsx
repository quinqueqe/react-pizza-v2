/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

// components
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/index'
import Skeleton from '../components/PizzaBlock/skeleton'
import sortDb from '../components/Sort/sortDb.json'
import Pagination from '../components/Pagination'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../redux/slices/pizza/pizzaSlice'
import { selectFilter, selectPizza } from '../redux/selectors'
const Home = () => {
	const { sortType, categoryId, valueInput, currentPage } = useSelector(selectFilter)
	const dispatch = useDispatch()
	const { pizzas, status } = useSelector(selectPizza)

	const skeleton = [...new Array(4)].map((_, index) => (
		<Skeleton key={index} />
	))

	// филтруются пиццы и получаем объекты элементов из массива pizzas
	const pizzs = pizzas
		.filter(obj => {
			if (obj.title.toLowerCase().includes(valueInput.toLowerCase())) {
				// достаем 'title' из массивов и превращаем его в нижний реестр, далее проверяем есть ли в 'title' такие же элементы как и в input из 'valueInput'
				return true // если есть, то возращаем true и код работает
			} else {
				return false // если нет, возращаем false и код не работает
			}
		})
		.map((value, i) => <PizzaBlock {...value} key={i} />)

	React.useEffect(() => {
		const category = categoryId > 0 ? categoryId : ''
		dispatch(fetchPizzas({ sortType, category, sortDb, currentPage }))
	}, [sortType, categoryId, valueInput, currentPage])
	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<Categories />
					<Sort />
				</div>
				<h2 className='content__title'>Все пиццы</h2>

				{status === 'error' ? (
					<div class='content__error cart cart--empty '>
						<h2>
							Произошла ошибка <icon>😕</icon>
						</h2>
						<p>
							К сожалению, не удалось получить пиццы.
							<br />
							Попробуйте повторить попытку позже.
						</p>
					</div>
				) : status === 'loading' ? (
					<div className='content__items'>{skeleton}</div>
				) : (
					<div className='content__items'>{pizzs}</div>
				)}
				<Pagination />
			</div>
		</div>
	)
}

export default Home
