import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Header} from './components/Header'
import { Footer } from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<div className='min-h-screen flex flex-col'>
				<Header />
				<main className='flex-grow'>
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
