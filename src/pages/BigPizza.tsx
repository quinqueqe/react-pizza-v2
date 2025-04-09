import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { BigPizzaItem } from '../@types/types'
import Skeleton from '../components/PizzaBlock/skeleton'
import { fetchPizza } from '../redux/slices/bigPizza/slice'
import { selectBigPizza } from '../redux/slices/pizzas/selectors'

const BigPizza: React.FC = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	// @ts-ignore
	const { item, status }: BigPizzaItem = useSelector(selectBigPizza)
	React.useEffect(() => {
		// @ts-ignore
		dispatch(fetchPizza({ id }))
	}, [])

	const { imageUrl, title, price } = item

	return (
		<div className='container'>
			{status === 'error' ? (
				<div className='content__error cart cart--empty '>
					<h2>
						Произошла ошибка <span>😕</span>
					</h2>
					<p>
						К сожалению, не удалось получить пиццу.
						<br />
						Попробуйте повторить попытку позже.
					</p>
				</div>
			) : status === 'loading' ? (
				<Skeleton />
			) : (
				<div className='fullPizza-block'>
					<img src={imageUrl} alt='img' />
					<h4>{title}</h4>
					<h2>{price} ₽</h2>

					<Link to='/' className='button button--black'>
						<span>Вернуться назад</span>
					</Link>
				</div>
			)}
		</div>
	)
}

export default BigPizza
