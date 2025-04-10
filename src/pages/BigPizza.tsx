import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Skeleton from '../components/PizzaBlock/skeleton'
import { selectBigPizza } from '../redux/pizzas/selectors'
import { fetchBigPizza } from '../redux/bigPizza/asyncActions'
import { BigPizzaItem } from '../redux/bigPizza/types'
import { useAppDispatch } from '../redux/store'

const BigPizza: React.FC = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const { item, status }: BigPizzaItem = useSelector(selectBigPizza)
	React.useEffect(() => {
		dispatch(fetchBigPizza({ id: id! }))
	})

	if (!item) {
		return (
			<div className='container'>
				<Skeleton />
			</div>
		)
	}

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
