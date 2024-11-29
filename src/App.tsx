import {AnimatePresence} from 'framer-motion'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import {PageTransition} from './components/PageTransition'
import {ContactPage} from './pages/ContactPage'
import {HomePage} from './pages/HomePage'
import { ServicesPage } from './pages/ServicePage'
import { AboutPage } from './pages/AboutPages'

function App() {
	return (
		<BrowserRouter>
			<div className='min-h-screen flex flex-col'>
				<Header />
				<main className='flex-grow'>
					<AnimatePresence mode='wait'>
						<Routes>
							<Route
								path='/'
								element={
									<PageTransition>
										<HomePage />
									</PageTransition>
								}
							/>
							<Route
								path='/services'
								element={
									<PageTransition>
										<ServicesPage />
									</PageTransition>
								}
							/>
							<Route
								path='/about'
								element={
									<PageTransition>
										<AboutPage />
									</PageTransition>
								}
							/>
							<Route
								path='/contact'
								element={
									<PageTransition>
										<ContactPage />
									</PageTransition>
								}
							/>
						</Routes>
					</AnimatePresence>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
