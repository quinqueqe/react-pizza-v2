import React from 'react'

// components
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/index'
import Skeleton from '../components/PizzaBlock/skeleton'
import sortDb from '../components/Sort/sortDb.json'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../redux/slices/pizza/pizzaSlice'
import { selectFilter, selectPizza } from '../redux/selectors'
const Home = () => {
	const { sortType, categoryId } = useSelector(selectFilter)
	const dispatch = useDispatch()
	const { pizzas, status } = useSelector(selectPizza)

	const skeleton = [...new Array(10)].map((_, index) => (
		<Skeleton key={index} />
	))

	React.useEffect(() => {
		const category = categoryId > 0 ? categoryId : ''
		console.log(sortType, sortDb[sortType].sortProperty)
		dispatch(fetchPizzas({ sortType, category, sortDb }))
	}, [sortType, categoryId])
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
					<div className='content__items'>
						{pizzas.map((pizza, i) => (
							<PizzaBlock {...pizza} key={i} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
