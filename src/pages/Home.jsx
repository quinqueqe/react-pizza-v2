import React from 'react'

// components
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/index'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../redux/slices/pizza/pizzaSlice'
import { selectPizza } from '../redux/selectors'
const Home = () => {
	const dispatch = useDispatch()
	const { pizzas } = useSelector(selectPizza)

	React.useEffect(() => {
		dispatch(fetchPizzas())
	}, [])
	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<Categories />
					<Sort />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>
					{pizzas.map((pizza, i) => (
						<PizzaBlock {...pizza} key={i} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
