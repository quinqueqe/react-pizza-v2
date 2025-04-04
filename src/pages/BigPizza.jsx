import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizza } from '../redux/slices/pizza/bigPizzaSlice'
import { selectBigPizza } from '../redux/selectors'
import { useParams } from 'react-router-dom'
import Skeleton from '../components/PizzaBlock/skeleton'

const BigPizza = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { item, status } = useSelector(selectBigPizza)
	React.useEffect(() => {
		dispatch(fetchPizza({ id }))
	}, [])

	const { imageUrl, title, price } = item

	return (
		<div className='container'>
			{status === 'error' ? (
				<div class='content__error cart cart--empty '>
					<h2>
						Произошла ошибка <icon>😕</icon>
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

					<Link to='/' class='button button--black'>
						<span>Вернуться назад</span>
					</Link>
				</div>
			)}
		</div>
	)
}

export default BigPizza
