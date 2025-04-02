import React from 'react'
import axios from 'axios'

// components
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/index'

// Redux

const Home = () => {
	const [pizzas, setPizzas] = React.useState([])
	React.useEffect(() => {
		const getFetch = async () => {
			const { data } = await axios.get(
				'https://6759dac0099e3090dbe32341.mockapi.io/items'
			)
			setPizzas(data)
		}
		getFetch()
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
