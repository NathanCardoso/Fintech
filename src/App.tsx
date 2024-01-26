import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DataContextProvider } from './context/dataContext'
import Header from './components/Header'
import Sidenave from './components/Sidenave'
import Sales from './pages/Sales'
import Sale from './pages/Sale'
import Summary from './pages/Summary'
import './style.css'

const App = () => {
	return (
		<BrowserRouter>
			<DataContextProvider>
				<div className='container'>
					<Sidenave />
					<main>
						<Header />
						<Routes>
							<Route path='/' element={<Summary />}/>
							<Route path='/sales' element={<Sales />}/>
							<Route path='/sales/:id' element={<Sale />}/>
						</Routes>
					</main>
				</div>
			</DataContextProvider>
		</BrowserRouter>
	)
}

export default App
