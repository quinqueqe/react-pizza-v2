import React from 'react'

const Categories = () => {
	// states
	const [categActiveTab, setCategActiveTab] = React.useState(0)
	//
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
						onClick={() => setCategActiveTab(i)}
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
