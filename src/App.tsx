import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import {HomePage} from './pages/HomePage'
import {ServicesPage} from './pages/ServicePage'

function App() {
	return (
		<BrowserRouter>
			<div className='min-h-screen flex flex-col'>
				<Header />
				<main className='flex-grow'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/services' element={<ServicesPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
