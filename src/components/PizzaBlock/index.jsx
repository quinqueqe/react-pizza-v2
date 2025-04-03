import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza, setTotalPrice } from '../../redux/slices/cart/cartSlice'
import { selectCart } from '../../redux/selectors'

const PizzaBlock = ({ id, imageUrl, title, price, types, sizes }) => {
	const dispatch = useDispatch()
	const { totalPrice, items } = useSelector(selectCart)
	const pizzaItem = items.find(obj => obj.id === id)
	const addedCount = pizzaItem ? pizzaItem.count : 0
	const typesDb = ['тонкое', 'традиционное']

	const pushPizza = id => {
		const pizza = {
			id,
			imageUrl,
			title,
			price,
			type: typesDb[activeType],
			size: sizes[activeSize],
		}
		dispatch(setTotalPrice(totalPrice + price))
		dispatch(addPizza(pizza))
		console.log('add')
	}

	// states
	const [activeType, setActiveType] = React.useState(0)
	const [activeSize, setActiveSize] = React.useState(0)
	//
	return (
		<div className='pizza-block'>
			<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
			<h4 className='pizza-block__title'>{title}</h4>
			<div className='pizza-block__selector'>
				<ul>
					{types.map((typeIndex, i) => (
						<li
							onClick={() => setActiveType(i)}
							key={i}
							className={activeType === i ? 'active' : ''}
						>
							{typesDb[typeIndex]}
						</li>
					))}
				</ul>
				<ul>
					{sizes.map((size, i) => (
						<li
							onClick={() => setActiveSize(i)}
							key={i}
							className={activeSize === i ? 'active' : ''}
						>
							{size} см
						</li>
					))}
				</ul>
			</div>
			<div className='pizza-block__bottom'>
				<div className='pizza-block__price'>от {price} ₽</div>
				<div
					onClick={() => pushPizza(id)}
					className='button button--outline button--add'
				>
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
							fill='white'
						/>
					</svg>
					<span>Добавить</span>
					{pizzaItem && <i>{addedCount}</i>}
				</div>
			</div>
		</div>
	)
}

export default PizzaBlock
