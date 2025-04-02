// react
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// redux
import { Provider } from 'react-redux'
import store from './redux/store'

// styles
import './scss/app.scss'
import App from './App'

const rootElem = document.getElementById('root')

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem)
	root.render(
		<Provider store={store}>
			<React.StrictMode>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</React.StrictMode>
		</Provider>
	)
}
