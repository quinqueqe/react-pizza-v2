import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
// import BigPizza from './pages/BigPizza'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				{/* <Route path='pizza/:id' element={<BigPizza/>} /> */}
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}
