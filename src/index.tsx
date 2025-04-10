// react
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// redux
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

// styles
import './scss/app.scss'
import App from './App'

const rootElem = document.getElementById('root')

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem)
	root.render(
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	)
}
